import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Styles } from "config/theme";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Avatar, Box, chakra, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { AiOutlineMenu, AiFillBell } from "react-icons/ai";
import { useSidebarState } from "hooks/store";
import { sidebarNavLinks } from "constants/sidebar";

const sidebarWidthExpanded = 200;
const sidebarWidthCollapsed = 80;

const Header = chakra(motion.header, {
  baseStyle: {
    top: 0,
    left: 0,
    right: 0,
    height: 24,
    zIndex: "sticky",
    paddingLeft: 8,
    display: "flex",
    paddingRight: 12,
    position: "fixed",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});

const Sidebar = chakra(motion.div, {
  baseStyle: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    bg: "white",
    zIndex: "banner",
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: "gray.100",
  },
});

const Main = chakra(motion.div, {
  baseStyle: {
    marginTop: 24,
    paddingTop: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

const SidebarMenuIndicator = chakra(motion.div, {
  baseStyle: {
    position: "absolute",
    h: 8,
    w: 1,
    right: -0.5,
    rounded: "full",
    bg: "purple.500",
    transform: "translateY(12px)",
  },
});

const SidebarNavItem = chakra(Link, {
  baseStyle: {
    h: 14,
    display: "flex",
    alignItems: "center",
    paddingLeft: 8,
  },
});

const nav: Variants = {
  initial: { maxWidth: 0 },
  animate: { maxWidth: 150, transition: { type: "tween" } },
  exit: { maxWidth: 0 },
};

const brand: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { type: "tween" } },
  exit: { scale: 0.5, opacity: 0 },
};

const sidebar: Variants = {
  hide: { width: sidebarWidthCollapsed, transition: { type: "tween" } },
  show: { width: sidebarWidthExpanded, transition: { type: "tween" } },
};

const main: Variants = {
  hide: { marginLeft: sidebarWidthCollapsed, transition: { type: "tween" } },
  show: { marginLeft: sidebarWidthExpanded, transition: { type: "tween" } },
};

const header: Variants = {
  hide: { marginLeft: sidebarWidthCollapsed, transition: { type: "tween" } },
  show: { marginLeft: sidebarWidthExpanded, transition: { type: "tween" } },
};

export const MainLayout: React.FC = ({ children }) => {
  const location = useLocation();

  const isSidebarOpen = useSidebarState((state) => state.isSidebarOpen);
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);

  const [headerShadow, setHeaderShadow] = React.useState("none");

  const menuIndicatorIndex = React.useMemo(() => {
    const match = location.pathname.split("/")[1];
    return sidebarNavLinks.findIndex((link) => link.match.includes(match));
  }, [location]);

  React.useEffect(() => {
    const onScroll = () => {
      setHeaderShadow(window.scrollY > 10 ? "base" : "none");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Sidebar variants={sidebar} animate={isSidebarOpen ? "show" : "hide"}>
        <Box h="24" position="relative">
          <AnimatePresence>
            {isSidebarOpen && (
              <Box as={motion.div} sx={styles.brand} initial="initial" animate="animate" exit="exit" variants={brand}>
                <Text fontFamily="brand" textTransform="uppercase" letterSpacing="widest" fontSize="xl">
                  Outstock
                </Text>
              </Box>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!isSidebarOpen && (
              <Box as={motion.div} sx={styles.brand} initial="initial" animate="animate" exit="exit" variants={brand}>
                <Text fontFamily="brand" textTransform="uppercase" letterSpacing="widest" fontSize="xl">
                  OS
                </Text>
              </Box>
            )}
          </AnimatePresence>
        </Box>
        <VStack alignItems="stretch" position="relative" spacing="0" mt="4">
          <SidebarMenuIndicator initial={{ top: 0 }} animate={{ top: menuIndicatorIndex * 56 }} />
          {sidebarNavLinks.map(({ icon: Icon, label, to, match }) => {
            const active = location.pathname.split("/")[1].includes(match);
            return (
              <SidebarNavItem key={label} to={to} color={active ? "purple.600" : "gray.500"}>
                <Icon size={20} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <Box as={motion.div} sx={styles.item} initial="initial" animate="animate" exit="exit" variants={nav}>
                      <Text ml="5" fontWeight="semibold">
                        {label}
                      </Text>
                    </Box>
                  )}
                </AnimatePresence>
              </SidebarNavItem>
            );
          })}
        </VStack>
      </Sidebar>
      <Header variants={header} animate={isSidebarOpen ? "show" : "hide"} shadow={headerShadow}>
        <HStack spacing="4">
          <IconButton variant="ghost" isRound color="gray.600" aria-label="menu" icon={<AiOutlineMenu />} onClick={toggleSidebar} />
          <Text fontWeight="semibold" fontSize="lg">
            Welcome, Adrian
          </Text>
        </HStack>
        <HStack spacing="4">
          <IconButton isRound color="gray.600" aria-label="menu" icon={<AiFillBell />} />
          <IconButton
            isRound
            aria-label="profile"
            variant="ghost"
            icon={<Avatar size="full" src="https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png" />}
          />
        </HStack>
      </Header>
      <Main variants={main} animate={isSidebarOpen ? "show" : "hide"}>
        {children}
      </Main>
    </>
  );
};

const styles = Styles.create({
  item: {
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  brand: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
