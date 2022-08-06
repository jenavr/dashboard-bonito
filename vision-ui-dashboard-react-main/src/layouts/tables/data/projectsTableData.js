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

/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images import example
import AdobeXD from "examples/Icons/AdobeXD";


function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "consulta", align: "left" },
    { name: "precio", align: "left" },
    { name: "estado", align: "left" },
    { name: "progreso", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      consulta: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
           Consulta por resfriado
          </VuiTypography>
        </VuiBox>
      ),
      precio: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $500 MXN
        </VuiTypography>
      ),
      estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          En proceso… 
        </VuiTypography>
      ),
      progreso: <Completion value={60} color="info" />,
      action,
    },
    {
      consulta: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
          Consulta por dolor de estómago
          </VuiTypography>
        </VuiBox>
      ),
      precio: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $300 MXN
        </VuiTypography>
      ),
      estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Completado
        </VuiTypography>
      ),
      progreso: <Completion value={100} color="info" />,
      action,
    },
    {
      consulta: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
           Consulta por lesión en el gimnasio
          </VuiTypography>
        </VuiBox>
      ),
      precio: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $500 MXN
        </VuiTypography>
      ),
      estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          En proceso…
        </VuiTypography>
      ),
      progreso: <Completion value={30} color="info" />,
      action,
    },
    {
      consulta: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Consulta por revisión general
          </VuiTypography>
        </VuiBox>
      ),
      precio: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $900 MXN
        </VuiTypography>
      ),
      estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Cancelado
        </VuiTypography>
      ),
      progreso: <Completion value={0} color="info" />,
      action,
    },
    {
      consulta: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Revisión de estudios
          </VuiTypography>
        </VuiBox>
      ),
      precio: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $800 MXN
        </VuiTypography>
      ),
      estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Completado
        </VuiTypography>
      ),
      progreso: <Completion value={100} color="info" />,
      action,
    },
  ],
};
