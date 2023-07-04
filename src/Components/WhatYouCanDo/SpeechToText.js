import {
  Box,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import guitarimage from "../../Assets/unsplash_Wt7XT1R6sjU.png";
import copyright from "../../Assets/images 1.png";
import copyright1 from "../../Assets/220px-Cc-public_domain_mark_white 1.png";
import copyright2 from "../../Assets/copyright-logo-png-clipart-best-5 2.png";
function SpeechToText() {
  return (
    <Box sx={{ position: "relative" }}>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="img"
            src={guitarimage}
            sx={{
              maxWidth: { xs: "250px", sm: "400px" },
              maxHeight: { xs: "250px", sm: "400px" },
            }}
          />
          <Stack sx={{ mt: 1, ml: 1 }}>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "500",
                maxWidth: "500px",
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              Speech to text Included
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#ADAFB5",
                maxWidth: { xs: 300, sm: 600 },
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              Turn dialogue into captions the with automatic transcriptions.
            </Typography>
          </Stack>
        </Grid>
        <Paper
          sx={{
            width: 300,
            height: 350,
            background: "",
            borderRadius: "16px",
            opacity: "0.7",
            position: "absolute",
            top: -30,
            left: { lg: -30, sm: 80, md: 0 },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Stack
            sx={{
              ml: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Typography sx={{ fontWeight: "600", color: "black" }}>
              Add watermark filter
            </Typography>
            <IconButton sx={{ color: "black" }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LinearProgress
              variant="determinate"
              value={0}
              sx={{
                color: "black",
                width: "270px",
                height: "8px",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Typography sx={{ mt: 2, ml: 2, fontWeight: "bold" }}>
            Text Pick Water
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Paper
              sx={{
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "14px", fontFamily: "Poppins" }}>
                CopyRight
              </Typography>{" "}
            </Paper>
            <Paper
              sx={{
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#DC1B1B",
                  fontFamily: "Rochester",
                }}
              >
                CopyRight
              </Typography>
            </Paper>
            <Paper
              sx={{
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "14px", fontFamily: "Rum Raisin" }}>
                CopyRight
              </Typography>
            </Paper>
          </Box>
          <Typography sx={{ mt: 2, ml: 2, fontWeight: "bold" }}>
            Images Pick Watermark
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Paper
              sx={{
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={copyright} width={40} height={40} />
            </Paper>
            <Paper
              sx={{
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={copyright1} width={40} height={40} />
            </Paper>
            <Paper
              sx={{
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={copyright2} width={40} height={40} />
            </Paper>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
}

export default SpeechToText;
