import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import phone from "../../Assets/1 61929 2.png";
import playstore from "../../Assets/playstore.jpg";
import apple from "../../Assets/Vector (1).png";

function DownloadApp() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: " #212933",
            height: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)",
              maxHeight: "300px",
              maxWidth: "1000px",
              width: "100%",
              borderRadius: "0px 80px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  component="img"
                  src={phone}
                  sx={{
                    maxWidth: { xs: 300, sm: 400 },
                    maxHeight: { xs: 300, sm: 400 },
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Stack>
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                      color: "white",
                      maxWidth: 350,
                      fontWeight: "600",
                      fontSize: { xs: "12px", sm: "30px" },
                      ml: { xs: 4, sm: 0 },
                    }}
                  >
                    Download the Free Add to watermark App
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "12px", sm: "18px" },
                      ml: { xs: 4, sm: 0 },
                    }}
                  >
                    for faster,easer booking and exlcusive deals
                  </Typography>
                  <Stack direction="row">
                    <Paper
                      sx={{
                        width: "150px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 3,
                      }}
                    >
                      <Box width={30} height={30} component="img" src={apple} />
                      <Stack>
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "12px" }}
                        >
                          Download on the
                        </Typography>
                        <Typography
                          sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                          App Store
                        </Typography>
                      </Stack>
                    </Paper>
                    <Paper
                      sx={{
                        width: "150px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 3,
                        ml: 2,
                      }}
                    >
                      <Box
                        width={30}
                        height={30}
                        component="img"
                        src={playstore}
                      />
                      <Stack>
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "12px" }}
                        >
                          GET it on
                        </Typography>
                        <Typography
                          sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                          Google Play
                        </Typography>
                      </Stack>
                    </Paper>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DownloadApp;
