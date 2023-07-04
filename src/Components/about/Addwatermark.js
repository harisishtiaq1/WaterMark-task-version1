import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import video from '../../imgs/video.png';
import pause from "../../imgs/Vector (2).png";


const Addwatermark = () => {
  return (
    <div>
      <Container>
      <Toolbar />
      <Grid container>
        <Grid item sm={12} md={6} sx={{display:'flex',alignItems:'center'}}>
          <Container>
            <Typography
              variant="h1"
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                mt: "14px",
                mb: "14px",
              }}
            >
              How to Watermark Your photo or Video:
            </Typography>
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    background: {xs:"transparent",md:"black"},
                    // width: {md:"122px",lg:'81px',xl:'51px'},
                    width:{xs:'0',md:'unset'},
                    padding:{md:'10px 20px', xs:'unset'},
                    height: "50px",
                    display: "flex",
                    borderRadius: "25px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      width: "9px",
                      marginBottom:{xs:'15px',md:'unset'},
                      textAlign: "center",
                      color: {xs:"black",md:"white"},
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    1
                  </Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                  <Typography variant="h6" sx={{ fontSize: "20px",textAlign:'initial',ml:'14px',fontWeight:'700' }}>
                    Add your video
                  </Typography>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{ fontSize: "16px", color: "#ADAFB5",
                    marginLeft: "18px",
                    textAlign: "initial",
                    lineHeight: "24px" }}
                  >
                    Upload your video to VEED. Just click on 'Choose Video' to
                    begin and select your file from your folders. Or drag and
                    drop it into the box.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{mt:'30px'}}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    background: {xs:"transparent",md:"black"},
                    // width: {md:"128px",lg:'86px',xl:'51px'},
                    width:{xs:'0',md:'unset'},
                    padding:{md:'10px 20px', xs:'unset'},
                    height: "50px",
                    display: "flex",
                    borderRadius: "25px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      width: "9px",
                      marginBottom:{xs:'15px',md:'unset'},
                      textAlign: "center",
                      color: {xs:"black",md:"white"},
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    2
                  </Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                  <Typography variant="h6" sx={{ fontSize: "20px",textAlign:'initial',ml:'14px',fontWeight:'700' }}>
                    Add your watermark
                  </Typography>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{ fontSize: "16px", color: "#ADAFB5",
                    marginLeft: "18px",
                    textAlign: "initial",
                    lineHeight: "24px" }}
                  >
                    Click on 'Upload' from the left menu and select Upload Image. Choose your image file and place it on your desired location on the video frame.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{mt:'30px'}}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    background: {xs:"transparent",md:"black"},
                    // width: {xl:"52px",md:'83px',lg:'57px'},
                    width:{xs:'0',md:'unset'},
                    padding:{md:'10px 20px', xs:'unset'},
                    height: "50px",
                    display: "flex",
                    borderRadius: "25px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      width: "9px",
                      marginBottom:{xs:'15px',md:'unset'},
                      textAlign: "center",
                      color: {xs:"black",md:"white"},
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    3
                  </Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                  <Typography variant="h6" sx={{ fontSize: "20px",textAlign:'initial',ml:'14px',fontWeight:'700' }}>
                    Export
                  </Typography>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{ fontSize: "16px", color: "#ADAFB5",
                    marginLeft: "18px",
                    textAlign: "initial",
                    lineHeight: "24px" }}
                  >
                    Your video now has your watermark! Click on 'Export' to download your video to your device.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
        <Grid item sm={12} md={6} sx={{width:'100%'}}>
            <Container>
                <Box sx={{background: `url(${video})`,mt:'65px',width:'100%',backgroundSize:'100% 100%',backgroundRepeat:'no-repeat',height:'424px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Box sx={{backgroundImage:"linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)",width:'111px',height:'111px',borderRadius:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Box component='img'  src={pause} />
                    </Box>
                </Box>
                <Typography variant="h6" sx={{ fontSize: "20px",textAlign:'initial',ml:'14px',fontWeight:'700' }}>Add Watermark to Video Tutorial</Typography>  
             </Container> 
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Addwatermark;
