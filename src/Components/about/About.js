import {
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import backimg from "../../imgs/element-2.png";
import aboutImg from "../../imgs/aboutImg.png";
import camera from "../../imgs/Vector.png";
import vcam from "../../imgs/Videocam.png"

const About = ({ aboutRef }) => {
  return (
    <>
      <Box ref={aboutRef}>
        <Toolbar />
        {/* <Box sx={{mt:'50px'}}/> */}
        <Toolbar />
        <Container sx={{ padding: "0px" }}>
          <Grid container>
            <Grid item xs={12} sm={6} sx={{ textAlign: { xs: "center" } }}>
              <Container>
              <Box
                sx={{
                  backgroundImage: `url(${backimg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: {
                    md: "100% 73%",
                    xs: "100% 72%",
                    lg: "100% 76%",
                    sm: "100% 70%",
                  },
                  backgroundPositionY: {
                    lg: "14rem",
                    md: "14rem",
                    xs: "11rem",
                    sm:'13rem'
                  },
                  height:{sm:'84vh',md:'100vh',lg:'91vh'},
                  backgroundPositionX: { lg: "0rem", md: "0rem" },
                  position:'relative'
                }}
              >
                <Box
                  component="img"
                  src={aboutImg}
                  sx={{
                    height:{xs:'65vh',sm:'70vh',md:'80vh'},
                    // width: { xs: "70%", sm: "unset" },
                    position: "relative",
                    bottom: { lg: "18px" },
                    left: { lg: "31px",md:'3rem',sm:'2rem' },
                    top:{sm:'3rem'},
                  }}
                />
                <Box
                  sx={{
                    display:{xs:'none',sm:'block'},
                    background: "white",
                    position: "absolute",
                    top: {lg:"17rem",md:'16rem',sm:'15rem'},
                    left: {lg:"2rem",md:"3rem",sm:'1rem'},

                    width: {sm:'18%',md:"16%"},
                    borderRadius: {sm:'5px',md:"5px"},
                    padding:{lg:"15px",md:'7px 4px',sm:'2px'},
                  }}
                >
                  <Typography sx={{ fontSize: {sm:'10px',md:"12px"}, color: "#ADAFB5" }}>
                    Add watermarks
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display:{xs:'none',sm:'block'},
                    background: "white",
                    position: "absolute",
                    top: {lg:"26rem",md:'27rem'},
                    left: {sm:'1rem',md:"2rem"},
                    color: "#ADAFB5",
                    width: {sm:'19%',md:"16%"},
                    borderRadius: {sm:'5px',md:"5px"},
                    padding: {lg:"14px 15px 2px 15px",md:"10px 10px 1px 10px",sm:'6px'},
                    bottom:{sm:'4rem',md:'unset'}
                  }}
                >
                  <Box component="img" src={camera} />
                  <Typography sx={{ fontSize: {sm:'10px',md:"12px"}, color: "#ADAFB5" }}>
                    Photo
                  </Typography>
                </Box>
                <Box sx={{
                  display:{xs:'none',sm:'none',md:'block'},
                    background: "white",
                    position: "absolute",
                    top: {lg:"20rem",md:'22rem'},
                    left: {lg:"29rem",md:"25rem"},
                    color: "#ADAFB5",
                    width: "16%",
                    borderRadius: "5px",
                    padding: {lg:"14px 15px 2px 15px",md:'10px 10px 1px 10px'},
                  }}>
                    <Box component="img" src={vcam} />
                    <Typography sx={{fontSize:'12px',color: "#ADAFB5"}}>video</Typography>
                  </Box>
              </Box>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "initial",
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              <Container>
                <Typography
                  variant="p"
                  component="div"
                  sx={{ color: "#2AAFF6" }}
                >
                  About us
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "40px",
                    fontWeight: "700",
                    mt: "14px",
                    mb: "14px",
                  }}
                >
                  Add Watermark Your Photos, or Videos, Free
                </Typography>
                <Typography
                  variant="p"
                  component="div"
                  sx={{
                    color: "#ADAFB5",
                    lineHeight: "30px",
                    fontSize: "20px",
                  }}
                >
                  Simple video editing software to add watermarks to your videos
                  online. No need to install an app. Simply upload your video,
                  upload your watermark photo, and place it anywhere on the
                  video frame! You don't need to create an account but you can
                  try our Pro
                </Typography>
                <Button
                  sx={{
                    backgroundImage:
                      "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)",
                    color: "white",
                    fontSize: "12px",
                    p: "14px 24px",
                    mt: "14px",
                    width: { xs: "95%", sm: "unset" },
                  }}
                >
                  Download
                </Button>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
