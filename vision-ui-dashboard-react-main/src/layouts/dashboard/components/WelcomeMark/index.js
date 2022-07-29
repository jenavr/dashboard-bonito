import React from "react";

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";

import gif from "assets/images/cardimgfree.png";

const WelcomeMark = () => {
  return (
    <Card sx={() => ({
      height: "340px",
      py: "32px",
      backgroundImage: `url(${gif})`,
      backgroundSize: "cover",
      backgroundPosition: "50%"
    })}>
      <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <VuiBox>
          
        </VuiBox>
        
      </VuiBox>
    </Card>
  );
};

export default WelcomeMark;
