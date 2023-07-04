import { Box, Typography } from "@mui/material";
import React from "react";

function Question() {
  return (
    <Box
      sx={{
        border: "1px solid lightgrey",
        padding: 1,
        borderRadius: "5px",
        backgroundColor: "#F7F9FA",
        width: "1200px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
        dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
        leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
        lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
        rhoncus, sem quam semper libero, sit amet adipiscing sem neque.
      </Typography>
    </Box>
  );
}

export default Question;
