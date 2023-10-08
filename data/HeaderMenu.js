import { AiOutlineHome } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

module.exports = [
  {
    id: 1,
    name: "Home",
    routePath: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "Resume",
    routePath: "/resume",
    icon: <CgNotes />,
  },
  // {
  //   id: 3,
  //   name: "Portfolio",
  //   routePath: "/portfolio",
  //   icon: <FiCodesandbox />,
  // },
  // {
  //   id: 4,
  //   name: "Blog",
  //   routePath: "/blog",
  //   icon: <FaBlogger />,
  // },
  {
    id: 5,
    name: "Contact",
    routePath: "/contact",
    icon: <RiContactsBookLine />,
  },
];
