/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { Card, Stack } from "@mui/material";
// @mui material components
import Grid from "@mui/material/Grid";
import colors from "assets/theme/base/colors";

// Vision UI Dashboard React base styles
import linearGradient from "assets/theme/functions/linearGradient";
import VideoChatCall from "components/videoChatTranslate/VideoChatCall/VideoChatCall";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiProgress from "components/VuiProgress";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React contexts
import { setDirection, useVisionUIController } from "context";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import BarChart from "examples/Charts/BarCharts/BarChart";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import Footer from "examples/Footer";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import OrderOverview from "layouts/rtl/components/OrderOverview";
import Projects from "layouts/rtl/components/Projects";
import ReferralTracking from "layouts/rtl/components/ReferralTracking";
import SatisfactionRate from "layouts/rtl/components/SatisfactionRate";

// Dashboard layout components
import WelcomeMark from "layouts/rtl/components/WelcomeMark";
import { barChartDataDashboard } from "layouts/rtl/data/barChartData";
import { barChartOptionsDashboard } from "layouts/rtl/data/barChartOptions";
import { lineChartDataDashboard } from "layouts/rtl/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/rtl/data/lineChartOptions";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoBuild, IoDocumentText, IoGlobe, IoWallet } from "react-icons/io5";

function RTL() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [, dispatch] = useVisionUIController();

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "ltr");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VideoChatCall/>
    </DashboardLayout>
  );
}

export default RTL;
