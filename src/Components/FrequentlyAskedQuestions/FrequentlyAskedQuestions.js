import {
  Box,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import Question from "./Question";

function FrequentlyAskedQuestions({ faqRef }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleQ2, setIsVisibleQ2] = useState(false);
  const [isVisibleQ3, setIsVisibleQ3] = useState(false);
  const [isVisibleQ4, setIsVisibleQ4] = useState(false);
  const [isVisibleQ5, setIsVisibleQ5] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };
  const handleToggleVisibilityQ2 = () => {
    setIsVisibleQ2(!isVisibleQ2);
  };
  const handleToggleVisibilityQ3 = () => {
    setIsVisibleQ3(!isVisibleQ3);
  };
  const handleToggleVisibilityQ4 = () => {
    setIsVisibleQ4(!isVisibleQ4);
  };
  const handleToggleVisibilityQ5 = () => {
    setIsVisibleQ5(!isVisibleQ5);
  };

  return (
    <Box sx={{ mt: 2 }} ref={faqRef}>
      <Toolbar />
      <Typography
        variant="h5"
        component="h5"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Frequently asked questions
      </Typography>
      <Container>
        <Grid container sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={handleToggleVisibility}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 01 goes here?
              </Typography>
              <IconButton onClick={handleToggleVisibility}>
                {isVisible ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isVisible && <Question />}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={handleToggleVisibilityQ2}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 02 goes here?
              </Typography>
              <IconButton onClick={handleToggleVisibilityQ2}>
                {isVisibleQ2 ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isVisibleQ2 && <Question />}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={handleToggleVisibilityQ3}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 03 goes here?
              </Typography>
              <IconButton onClick={handleToggleVisibilityQ3}>
                {isVisibleQ3 ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isVisibleQ3 && <Question />}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={handleToggleVisibilityQ4}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 04 goes here?
              </Typography>
              <IconButton onClick={handleToggleVisibilityQ4}>
                {isVisibleQ4 ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isVisibleQ4 && <Question />}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={handleToggleVisibilityQ5}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 05 goes here?
              </Typography>
              <IconButton onClick={handleToggleVisibilityQ5}>
                {isVisibleQ5 ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isVisibleQ5 && <Question />}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FrequentlyAskedQuestions;
