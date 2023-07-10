import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import apple from "../../imgs/Vector (1).png";
import playstore from "../../imgs/playstore.jpg";
import homeImg from "../../imgs/Screenshot 2023-06-12 at 6.31 1.png";
import backImg from "../../imgs/element-2.png";
import phoneImg from "../../imgs/aboutImg.png";

const Home = ({ homeRef }) => {
  return (
    <div ref={homeRef}>
      <Toolbar />

      <Container maxWidth="lg">
        <Grid sx={{ mt: "20px" }} container spacing={4}>
          <Grid item xs={12} sm={6} xl={6}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "600",
                textAlign: "initial",
                fontSize: { xs: "60px", md: "79px" },
              }}
            >
              Easy way to become a Pro video App
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ color: "#ccc", textAlign: "initial", marginTop: "36px" }}
            >
              Add watermarks to your videos online. Add logos, text, photo, and
              more.
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{
                color: "black",
                marginTop: "16px",
                textAlign: "initial",
                marginBottom: "16px",
              }}
            >
              Download now
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  sx={{
                    width: "150px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 3,
                    margin: { xs: "auto", sm: "unset" },
                    cursor: "pointer",
                  }}
                >
                  <Box width={30} height={30} component="img" src={apple} />
                  <Stack>
                    <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                      Download on the
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      App Store
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  sx={{
                    width: "150px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 3,
                    ml: 2,
                    cursor: "pointer",
                    margin: { xs: "auto", sm: "unset" },
                  }}
                >
                  <Box width={30} height={30} component="img" src={playstore} />
                  <Stack>
                    <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                      GET it on
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Google Play
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: {
                xs: "none",
                sm: "unset",
                paddingLeft: "0px!important",
                paddingTop: "0px!important",
              },
            }}
            sm={6}
            xl={6}
          >
            <Box
              sx={{
                background: `url(${backImg})`,
                height: "91vh",
                // width: { md: "67%", xs: "99%" },
                backgroundSize: {
                  lg: "100% 91%",
                  md: "100% 91%",
                  sm: "100% 70%",
                },
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "9rem",
              }}
            >
              <Box
                component="img"
                src={phoneImg}
                sx={{
                  position: "relative",
                  height: { lg: "80vh", md: "80vh", sm: "70vh" },
                  left: { lg: "15rem", md: "12rem", sm: "6rem" },
                }}
              />
              <Box
                component="img"
                src={homeImg}
                sx={{
                  position: "absolute",
                  width:{lg:'20%',md:'29%',xl:"13%"},
                  top: { lg: "19rem", md: "20rem", sm: "17rem",xl:"20rem" },
                  right: { lg: "23rem", md: "12rem", sm: "9rem",xl:"57rem" },
                  height: { sm: "22vh", md: "unset" },
                }}
              />
              {/* <Box
                component="img"
                src={homeImg}
                sx={{
                  position: "absolute",
                  left: { xs: "-9px", md: "-57px", sm: "-21px", lg: "-169" },
                  bottom: "160px",
                  width: { xs: "70%", sm: "74%", md: "100%" },
                }}
              /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
