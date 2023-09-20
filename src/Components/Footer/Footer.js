import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
  InputBase,
  Paper,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ mt: 2, ml: 2 }}>
            <Typography variant="h6" component="h6" sx={{ fontWeight: "600" }}>
              About Us
            </Typography>
            <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
              Add to watermark simple video editing software to add watermarks
              to your videos online. No need to install an app. Simply upload
              your video, upload your watermark photo, and place it anywhere on
              the video frame!
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ mt: 2, ml: 2 }}>
            <Typography variant="h6" component="h6" sx={{ fontWeight: "600" }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Link style={{ textDecoration: "none" }}>
                <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
                  {" "}
                  About us
                </Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
                  {" "}
                  Pricing
                </Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
                  {" "}
                  Faqs
                </Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
                  Contact Us
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
              <Typography
                sx={{ color: "grey", fontSize: "14px", width: "200px" }}
              >
                9 bengeo Gardens,Chadwell Heath
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ mt: 2, ml: 2 }}>
            <Typography variant="h6" component="h6" sx={{ fontWeight: "600" }}>
              NewsLetter
            </Typography>

            <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
              Signup to our NewsLetter
            </Typography>
            {/* <Grid container> */}
            {/* <Grid item xs={8} md={12}> */}
            <Paper sx={{ padding: 1, background: "#F7F9FC", mt: 1 }}>
              <InputBase placeholder="Email Address" />
            </Paper>
            {/* </Grid> */}
            {/* </Grid> */}
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%);",
                borderRadiusL: "10px",
                mt: 2,
              }}
            >
              SEND
            </Button>
            <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 5 }}>
              <IconButton
                sx={{
                  color: "black",
                  boxShadow: "0px 6px 27px rgba(49, 49, 49, 0.17)",
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "black",
                  boxShadow: "0px 6px 27px rgba(49, 49, 49, 0.17)",
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "black",
                  boxShadow: "0px 6px 27px rgba(49, 49, 49, 0.17)",
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: "25px", mb: "25px" }}>
        <hr />
      </Box>
      <Grid container sx={{ pb: "2rem" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="p" sx={{ color: "#9F9F9F" }}>
            © 2023 waterMark Inc.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
            <Typography variant="p" sx={{ color: "#9F9F9F" }}>
              Privacy Policy
            </Typography>
            <Typography
              variant="span"
              sx={{
                mr: { xs: "7px", md: "10px" },
                ml: { xs: "7px", md: "10px" },
                color: "#9F9F9F",
              }}
            >
              {" "}
              |{" "}
            </Typography>
          </Link>

          <Link to="/terms" style={{ textDecoration: "none" }}>
            <Typography variant="p" sx={{ color: "#9F9F9F" }}>
              Terms
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
