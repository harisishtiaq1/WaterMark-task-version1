import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CreativityWIthFilters from "./CreativityWIthFilters";
import SpeechToText from "./SpeechToText";

function YouCanDo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Grid Container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontWeight: "600", textAlign: "center" }}
          >
            See what You can do
          </Typography>
          <Typography
            sx={{
              color: "grey",
              textAlign: "center",
              maxWidth: "380px",
              width: "100%",
              mt: 2,
            }}
          >
            We provide complete features and certainly no less competitive with
            other video applications
          </Typography>
        </Grid>
      </Grid>
      <Container>
        <Grid
          container
          spacing={4}
          sx={{ mt: 2, display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <CreativityWIthFilters />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <SpeechToText />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default YouCanDo;
