import React, { useRef } from "react";
import {
  Container,
  Divider,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import DownloadApp from "../DownloadApp/DownloadApp";
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PricePlans from "../PricePlans/PricePlans";
import YouCanDo from "../WhatYouCanDo/YouCanDo";
import Contact from "../Footer/Contatcs/Contact";
import Footer from "../Footer/Footer";
import DrawerAppBar from "../appbar/Appbar";
import Home from "../home/Home";
import About from "../about/About";
import Addwatermark from "../about/Addwatermark";

function Layout({ pricingRef, faqRef, contactRef }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontWeightBold: "600",
    },
  });
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const executeHomeScroll = () =>
    homeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center", // optional, defaults to'start' for elements other than `
    });
  const executeAboutScroll = () =>
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      TransitionEvent: "3s",
    });

  const executePriceScroll = () =>
    pricingRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      transitionDuration: "3s",
    });
  const executeFaqScroll = () => {
    faqRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      transitionDuration: "3s",
    });
  };
  const executeContactScroll = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      transitionDuration: "3s",
    });
  };
  return (
    <>
      <DrawerAppBar
        executeHomeScroll={executeHomeScroll}
        executeAboutScroll={executeAboutScroll}
        executePriceScroll={executePriceScroll}
        executeFaqScroll={executeFaqScroll}
        executeContactScroll={executeContactScroll}
      />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Addwatermark />
      <ThemeProvider theme={theme}>
        <YouCanDo />
        <PricePlans pricingRef={pricingRef} />
        <FrequentlyAskedQuestions faqRef={faqRef} />
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <DownloadApp />
          </Grid>
        </Grid>
        <Container>
          <Contact contactRef={contactRef} />
          <Divider
            variant="middle"
            sx={{ mt: 6, border: "1px solid #D9D9D9" }}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;
