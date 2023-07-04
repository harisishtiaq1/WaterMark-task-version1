import { Box, Typography } from "@mui/material";
import React from "react";

function AboutUs() {
  return (
    <Box sx={{ mt: 2, ml: 2 }}>
      <Typography variant="h6" component="h6" sx={{ fontWeight: "600" }}>
        About Us
      </Typography>
      <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
        Add to watermark simple video editing software to add watermarks to your
        videos online. No need to install an app. Simply upload your video,
        upload your watermark photo, and place it anywhere on the video frame!
      </Typography>
    </Box>
  );
}

export default AboutUs;
