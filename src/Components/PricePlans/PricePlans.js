import { Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import Plans from "./Plans";

function PricePlans({ pricingRef }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
        ref={pricingRef}
      >
        <Toolbar />
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
              Our Price plans
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
              We provide complete features and certainly no less competitive
              with other video applications
            </Typography>
          </Grid>
        </Grid>
        <Paper
          sx={{
            backgroundColor: "#FFFFFF",
            display: "flex",
            width: { xs: "200px", sm: "300px" },
            padding: 1,
            justifyContent: "space-around",
            borderRadius: "30px",
            mt: 2,
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: "grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "14px", sm: "18px" },
            }}
          >
            Monthly
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              borderRadius: "30px",
              width: { xs: "100px", sm: 130 },
              height: "50px",
              background: "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%);",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: { xs: "12px", sm: "18px" },
            }}
          >
            Annually
          </Typography>
        </Paper>
      </Box>
      <Plans />
    </>
  );
}

export default PricePlans;
