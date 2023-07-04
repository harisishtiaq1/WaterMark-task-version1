import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ellipse from "../../Assets/Ellipse 5.png";
import React from "react";

function Plans() {
  return (
    <Container>
      <Grid
        container
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Paper
            sx={{
              maxWidth: "300px",
              width: "100%",
              height: "420px",
              borderRadius: "30px",
              padding: 1,
              mt: { xs: 2, sm: 2, md: 2 },
            }}
          >
            <Stack
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "lightgrey",
                  borderRadius: "50%",
                  mt: 2,
                  ml: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box component="img" src={ellipse} height={30} width={30} />
              </Box>
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontWeight: "500", ml: 3, mt: 1 }}
              >
                Free
              </Typography>
            </Stack>
            <Stack
              spacing={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <Typography
                sx={{ color: "grey", width: "270px", textAlign: "justify" }}
              >
                We provide complete features and certoiny no less competitve
                with other video oppliconons
              </Typography>
              <Box sx={{ position: "relative" }}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontSize: "80px", position: "relative" }}
                >
                  0
                </Typography>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ position: "absolute", right: 50, bottom: 60 }}
                >
                  $
                </Typography>
              </Box>
              <Button
                sx={{
                  background:
                    "linear-gradient(180deg, #EC2020 0%, #FFA500 100%)",
                  borderRadius: "80px",
                  color: "white",
                  height: "60px",
                  width: "171px",
                }}
              >
                Try for Free
              </Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Paper
            sx={{
              maxWidth: "300px",
              width: "100%",
              height: "420px",
              borderRadius: "30px",
              padding: 1,
              mt: { xs: 2, sm: 2, md: 2 },
            }}
          >
            <Stack
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#D4A4FA",
                  borderRadius: "50%",
                  mt: 2,
                  ml: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box component="img" src={ellipse} height={30} width={30} />
              </Box>
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontWeight: "500", ml: 3, mt: 1 }}
              >
                Basic
              </Typography>
            </Stack>
            <Stack
              spacing={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <Typography
                sx={{ color: "grey", width: "270px", textAlign: "justify" }}
              >
                We provide complete features and certoiny no less competitve
                with other video oppliconons
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100px",
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ position: "absolute", right: 70, bottom: 55 }}
                >
                  $
                </Typography>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontSize: "60px" }}
                >
                  20
                </Typography>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    position: "absolute",
                    left: 65,
                    fontSize: "30px",
                    bottom: 5,
                  }}
                >
                  /Month
                </Typography>
              </Box>
              <Button
                sx={{
                  background:
                    "linear-gradient(180deg, #EC2020 0%, #FFA500 100%)",
                  borderRadius: "80px",
                  color: "white",
                  padding: 1,
                  height: "60px",
                  width: "171px",
                  mt: 4,
                }}
              >
                Try Basic
              </Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Paper
            sx={{
              maxWidth: "300px",
              width: "100%",
              height: "420px",
              borderRadius: "30px",
              padding: 1,
              mt: { xs: 2, sm: 2, md: 2 },
            }}
          >
            <Stack
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#00CFF4",
                  borderRadius: "50%",
                  mt: 2,
                  ml: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box component="img" src={ellipse} height={30} width={30} />
              </Box>
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontWeight: "500", ml: 3, mt: 1 }}
              >
                Pro
              </Typography>
            </Stack>
            <Stack
              spacing={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <Typography
                sx={{ color: "grey", width: "270px", textAlign: "justify" }}
              >
                We provide complete features and certoiny no less competitve
                with other video oppliconons
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100px",
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontSize: "60px" }}
                >
                  40
                </Typography>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    position: "absolute",
                    left: 75,
                    fontSize: "30px",
                    bottom: 10,
                  }}
                >
                  /Year
                </Typography>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ position: "absolute", right: 70, bottom: 55 }}
                >
                  $
                </Typography>
              </Box>
              <Button
                sx={{
                  background:
                    "linear-gradient(180deg, #EC2020 0%, #FFA500 100%)",
                  borderRadius: "80px",
                  color: "white",
                  padding: 1,
                  height: "60px",
                  width: "171px",
                }}
              >
                Try Pro
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Plans;
