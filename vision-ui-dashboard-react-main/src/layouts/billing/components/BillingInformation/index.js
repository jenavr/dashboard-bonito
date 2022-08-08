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

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Cuentas Registradas
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Luis López"
            company="Hospital Central Universitario"
            email="oliver@HCU.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucrecio González"
            company="Hospital Ángeles Chihuahua"
            email="lucas@HACH.com"
            vat="FRB1235476"
          />
          <Bill
            name="Kevin Moreno"
            company="CHRISTUS MUGUERZA"
            email="ethan@cm.com"
            vat="FRB1235476"
            noGutter
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default BillingInformation;
