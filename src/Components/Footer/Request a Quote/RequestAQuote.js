import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import React from "react";

function RequestAQuote() {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "600" }}>
        Request a Quote
      </Typography>
      <Typography
        variant="p"
        component="p"
        sx={{ fontWeight: "400", color: "grey", mt: 4 }}
      >
        Any question or remarks? Just write us a message.
      </Typography>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography>First Name</Typography>
          <TextField variant="standard"></TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Last Name</Typography>
          <TextField variant="standard"></TextField>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 2 }}>
          <Typography>Email</Typography>
          <TextField variant="standard"></TextField>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 2 }}>
          <Typography>Phone Number</Typography>
          <TextField variant="standard"></TextField>
        </Grid>
        <Grid item xs={12} md={12} sx={{ mt: 2 }}>
          <Typography>Message</Typography>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Write your message.."
          ></TextField>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)",
            borderRadiusL: "10px",
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}

export default RequestAQuote;
