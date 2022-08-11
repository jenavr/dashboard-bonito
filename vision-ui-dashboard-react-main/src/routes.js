// Vision UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";


// Vision UI Dashboard React icons
import { IoHome, IoRocketSharp } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBuild } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { IoFolder } from "react-icons/io5";
import { IoMap } from "react-icons/io5";
import { IoMedical } from "react-icons/io5";
import Dashboard2 from "layouts/dashboard2";
import '../src/components/leaf.css';

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard2,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Consultorios",
    key: "dashboard2",
    route: "/dashboard2",
    icon: <IoMap size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Historial Médico",
    key: "tables",
    route: "/tables",
    icon: <IoFolder size="15px" color="inherit" />,
    component: Tables,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Formas de pago",
    key: "billing",
    route: "/billing",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: Billing,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Video Chat",
    key: "videoChat",
    route: "/videoChat",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: RTL,
    noCollapse: true,
  },
 
];

export default routes;
