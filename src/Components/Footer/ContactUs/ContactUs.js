import { Box, IconButton, Stack, Typography } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

function ContactUs() {
  return (
    <Box sx={{ mt: 2, ml: 2 }}>
      <Typography variant="h6" component="h6" sx={{ fontWeight: "600" }}>
        Contact Us
      </Typography>
      <Stack direction="row" sx={{ mt: 4 }} spacing={2}>
        <IconButton sx={{ margin: "0", padding: "0" }}>
          <PhoneInTalkIcon />
        </IconButton>
        <Typography sx={{ color: "grey", fontSize: "14px" }}>
          +44 20 3286 7512
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mt: 4 }} spacing={2}>
        <IconButton sx={{ margin: "0", padding: "0" }}>
          <EmailIcon />
        </IconButton>
        <Typography sx={{ color: "grey", fontSize: "14px" }}>
          hello@otwosoft.com
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mt: 4 }} spacing={2}>
        <IconButton sx={{ margin: "0", padding: "0" }}>
          <LocationOnIcon />
        </IconButton>
        <Typography sx={{ color: "grey", fontSize: "14px", width: "200px" }}>
          9 bengeo Gardens,Chadwell Heath
        </Typography>
      </Stack>
    </Box>
  );
}

export default ContactUs;
