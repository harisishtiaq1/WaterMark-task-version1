import React from "react";
import { Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ContactInformation({contactRef}) {
  return (
    <Box
      sx={{
        backgroundColor: "#F7F9FA",
        maxWidth: "400px",
        height: "400px",
        borderRadius: "10px",
        paddingTop: 3,
        overflow: "hidden",
        position: "relative",
      }}
      ref={contactRef}
    >
      <Stack sx={{ ml: 3 }}>
        <Typography variant="h6" component="h6" sx={{ fontWeight: "600" }}>
          Contact Information
        </Typography>
        <Typography variant="p" component="p" sx={{ fontWeight: "500" }}>
          Say something to start a live chat
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
      </Stack>
      <Box
        sx={{
          width: "112px",
          height: "111px",
          background: "#CCCCCC 50%",
          position: "absolute",
          borderRadius: "50%",
          left: 230,
          top: 280,
        }}
      ></Box>
      <Box
        sx={{
          overflow: "hidden",
          width: "200px",
          height: "200px",
          background: "#D7D7D7",
          position: "absolute",
          borderRadius: "50%",
          left: 270,
          top: 300,
          opacity: 0.7,
        }}
      ></Box>
    </Box>
  );
}

export default ContactInformation;
