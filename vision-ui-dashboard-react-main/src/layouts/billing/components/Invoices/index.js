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

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <VuiBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          Recibos
        </VuiTypography>
        <VuiButton variant="contained" color="info" size="small">
          Ver Todos
        </VuiButton>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="Julio, 01, 2022" id="#MS-415646" price="$180" />
          <Invoice date="Junio, 10, 2022" id="#RV-126749" price="$250" />
          <Invoice date="Mayo, 05, 2022" id="#QW-103578" price="$120" />
          <Invoice date="Abril, 25, 2022" id="#MS-415646" price="$180" />
          <Invoice date="Marzo, 01, 2022" id="#AR-803481" price="$300" noGutter />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Invoices;
