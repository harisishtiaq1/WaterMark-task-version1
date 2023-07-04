import { Box, Grid, Toolbar } from "@mui/material";
import React from "react";
import ContactInformation from "../ContactInformation/ContactInformation";
import RequestAQuote from "../Request a Quote/RequestAQuote";

function Contact({contactRef}) {
  return (
    <>
    <Box ref={contactRef}>
      <Toolbar/>
    <Grid container spacing={3} sx={{ mt: 3 }}>
      <Grid item xs={12} md={6}>
        <ContactInformation />
      </Grid>
      <Grid item xs={12} md={6}>
        <RequestAQuote />
      </Grid>
    </Grid>
    </Box>
    </>
  );
}

export default Contact;
