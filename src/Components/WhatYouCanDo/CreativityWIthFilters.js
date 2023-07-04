import {
  Box,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import girlimage from "../../Assets/unsplash_K_b41GaWC5Y.png";
import girlimage1 from "../../Assets/unsplash_K_b41GaWC5Y (1).png";
import girlimage2 from "../../Assets/unsplash_K_b41GaWC5Y (2).png";
import girlimage3 from "../../Assets/unsplash_K_b41GaWC5Y (3).png";

function CreativityWIthFilters() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
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
            src={girlimage}
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
                textAlign: { xs: "center", sm: "start" },
                fontWeight: "500",
                maxWidth: "500px",
              }}
            >
              Creativity with Filters
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                textAlign: { xs: "center", sm: "start" },

                color: "#ADAFB5",
                maxWidth: "300px",
              }}
            >
              Customize amazing filters according to your creativity
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Paper
        sx={{
          maxWidth:{xs:300,sm:400},
          height: 350,
          background: "",
          borderRadius: "16px",
          opacity: "0.7",
          position: "absolute",
          top: -30,
          left: { lg: -30, sm: 80,md:0 },

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
            Blur
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
        <Stack
          sx={{
            mt: 3,
            ml: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography sx={{ fontWeight: "600", color: "black" }}>
            Color
          </Typography>
          <Typography>50%</Typography>
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
            value={50}
            sx={{
              color: "black",
              width: "270px",
              height: "8px",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Stack
          sx={{
            mt: 3,
            ml: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography sx={{ fontWeight: "600", color: "black" }}>
            Blur Radius
          </Typography>
          <Typography>80%</Typography>
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
            value={80}
            sx={{
              color: "black",
              width: "270px",
              height: "8px",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Stack
          sx={{
            mt: 3,
            ml: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography sx={{ fontWeight: "600", color: "black" }}>
            HighLight
          </Typography>
          <Typography>0%</Typography>
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
            value={5}
            sx={{
              color: "black",
              width: "270px",
              height: "8px",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 3,
          }}
        >
          <Box component="img" src={girlimage} width={60} height={60} />
          <Box component="img" src={girlimage1} width={60} height={60} />
          <Box component="img" src={girlimage2} width={60} height={60} />
          <Box component="img" src={girlimage3} width={60} height={60} />
        </Box>
      </Paper>
    </Box>
  );
}

export default CreativityWIthFilters;
