import * as React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Styles } from "config/theme";

const styles = Styles.create({
  background: {
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${require("assets/images/login-background-1.png")})`,
  },
});

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.background}>
      <Container maxW="container.lg" pt="10">
        <Box>
          <Heading fontFamily="brand" textTransform="uppercase" size="md" letterSpacing="widest" textAlign="center">
            Outstock
          </Heading>
          <Text color="gray.400" mt="2" textAlign="center" size="sm">
            Admin Panel Version 1.0.0
          </Text>
        </Box>
        <Box bgColor="#FFFFFF" py="12" rounded="lg" mt="10" shadow="xl">
          <HStack divider={<StackDivider />}>
            <Box flex={1} px="12" display="flex" alignItems="center" justifyContent="center" minH="lg">
              <Image w="350px" sx={{ aspectRatio: 1 / 1 }} src={require("assets/images/admin-2.png")} />
            </Box>
            <Box flex={1} px="12" minH="lg" display="flex" flexDirection="column" justifyContent="center">
              <Box w="8" h="1" bgColor="purple.500" rounded="lg" mb="1" />
              <Text fontWeight="600">Login as an Admin User</Text>
              <VStack spacing={4} mt="6">
                <InputGroup>
                  <Input placeholder="Enter your email" rounded="2xl" />
                  <InputRightElement color="gray.500" children={<AiOutlineUser />} />
                </InputGroup>
                <InputGroup>
                  <Input type="password" placeholder="Enter your password" rounded="2xl" />
                  <InputRightElement color="gray.500" children={<AiOutlineLock />} />
                </InputGroup>
              </VStack>
              <Button rounded="2xl" mt="6" colorScheme="purple" isFullWidth onClick={() => navigate("/dashboard")}>
                Login
              </Button>
            </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};
