import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

function NewsLetter() {
  return (
    <Box sx={{ mt: 2, ml: 2 }}>
      <Typography variant="h6" component="h6" sx={{ fontWeight: "600" }}>
        NewsLetter
      </Typography>

      <Typography sx={{ mt: 2, color: "grey", fontSize: "15px" }}>
        Signup to our NewsLetter
      </Typography>
      <Grid container>
        <Grid item xs={8} md={12}>
          <Paper sx={{ padding: 1, background: "#F7F9FC", mt: 1 }}>
            <InputBase placeholder="Email Address" />
          </Paper>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)",
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
  );
}

export default NewsLetter;
