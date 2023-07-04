import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Company() {
  return (
    <Box sx={{ mt: 2, ml: 2 }}>
      <Typography variant="h6" component="h6" sx={{ fontWeight: "600" }}>
        Company
      </Typography>
      <Stack spacing={3}>
        <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
          {" "}
          About us
        </Typography>
        <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
          {" "}
          Pricing
        </Typography>
        <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
          {" "}
          Faqs
        </Typography>
        <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
          Contact Us
        </Typography>
      </Stack>
    </Box>
  );
}

export default Company;
