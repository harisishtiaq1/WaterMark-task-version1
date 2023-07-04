import {
  Box,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import CreativityImg from "../../imgs/unsplash_K_b41GaWC5Y.png";
import SpeechImg from "../../imgs/speechImg.png";
import CloseIcon from "@mui/icons-material/Close";

const Creativity = () => {
  return (
    <div>
      {/* <Toolbar /> */}
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: "40px",
              width: "425px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            See what you can do
          </Typography>
          <Typography
            sx={{
              width: "587px",
              fontWeight: 400,
              fontSize: "20px",
              color: "#ADAFB5",
              margin: "auto",
              paddingTop: "20px",
            }}
          >
            We provide complete features and certainly no less competitive with
            other video applications
          </Typography>
        </Grid>
      </Grid>
     
      <Toolbar />
    </div>
  );
};

export default Creativity;
