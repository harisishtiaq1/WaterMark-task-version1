import { useRef } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import About from "./Components/about/About";
import Addwatermark from "./Components/about/Addwatermark";
import DrawerAppBar from "./Components/appbar/Appbar";
import Home from "./Components/home/Home";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

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
    })
  }
  return (
    <>
      <DrawerAppBar
        executeHomeScroll={executeHomeScroll}
        executeAboutScroll={executeAboutScroll}
        executePriceScroll={executePriceScroll}
        executeFaqScroll={executeFaqScroll}
        executeContactScroll = {executeContactScroll}
      />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Addwatermark />
      <Layout pricingRef={pricingRef} faqRef={faqRef} contactRef={contactRef} />
    </>
  );
}

export default App;
