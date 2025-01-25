import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import LanguageSelectionPage from "./pages/LanguageSelectionPage";
import TranslationPage from "./pages/TranslationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/language/selection"
            element={<LanguageSelectionPage />}
          />
          <Route path="/live/translation" element={<TranslationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
