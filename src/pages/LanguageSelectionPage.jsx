import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you're using react-router-dom for navigation

const LanguageSelector = () => {
  const [selectedSourceLanguage, setSelectedSourceLanguage] = useState("");
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState("");
  const navigate = useNavigate();

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
    { code: "ba", name: "Bhojpuri" },
    { code: "a", name: "Arabic" },
  ];

  const handleSpeakNowClick = () => {
    if (!selectedSourceLanguage || !selectedTargetLanguage) {
      alert("Please select both source and target languages.");
      return;
    }
    navigate(
      `/live/translation?source=${selectedSourceLanguage}&target=${selectedTargetLanguage}`
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="language-selector bg-white shadow-lg rounded-2xl p-6 w-full max-w-md transform transition-transform duration-300 ease-in-out hover:scale-105">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Language Selector
        </h1>

        <div className="mb-4">
          <label
            htmlFor="source-language-select"
            className="block font-medium text-gray-700 mb-2"
          >
            Source Language
          </label>
          <select
            id="source-language-select"
            value={selectedSourceLanguage}
            onChange={(e) => setSelectedSourceLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            aria-label="Select the source language"
          >
            <option value="" disabled>
              Select Source Language
            </option>
            {languages.map((language) => (
              <option key={language.code} value={language.name}>
                {language.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="target-language-select"
            className="block font-medium text-gray-700 mb-2"
          >
            Target Language
          </label>
          <select
            id="target-language-select"
            value={selectedTargetLanguage}
            onChange={(e) => setSelectedTargetLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            aria-label="Select the target language"
          >
            <option value="" disabled>
              Select Target Language
            </option>
            {languages.map((language) => (
              <option key={language.code} value={language.name}>
                {language.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSpeakNowClick}
          className="w-full bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          Speak Now
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
