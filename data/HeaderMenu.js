import { AiOutlineHome } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { RiContactsBookLine } from "react-icons/ri";

const headerMenu = [
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

export default headerMenu;
