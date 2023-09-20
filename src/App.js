import { useRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Privacy from "./Components/Footer/PrivacyPolicy";
import Terms from "./Components/Footer/Terms";
function App() {
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout
              pricingRef={pricingRef}
              faqRef={faqRef}
              contactRef={contactRef}
            />
          }
        />
        <Route exact path="/privacy-policy" element={<Privacy />} />
        <Route exact path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
