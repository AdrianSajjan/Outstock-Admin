import { AiFillCreditCard, AiFillHome, AiFillShopping } from "react-icons/ai";

export const sidebarNavLinks = [
  {
    label: "Home",
    to: "/dashboard",
    match: "dashboard",
    icon: AiFillHome,
  },
  {
    label: "Products",
    to: "/products",
    match: "products",
    icon: AiFillShopping,
  },
  {
    label: "Payments",
    to: "/payments",
    match: "payments",
    icon: AiFillCreditCard,
  },
];
