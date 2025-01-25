import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you're using react-router-dom for navigation

const LanguageSelector = () => {
  const [selectedSourceLanguage, setSelectedSourceLanguage] = useState("");
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState("");
  const navigate = useNavigate();

  const languages = [
    { name: "English" },
    { name: "Hindi" },
    { name: "Marathi" },
    { name: "Bhojpuri" },
    { name: "Tamil" },
    { name: "Malayalam" },
    { name: "Spanish" },
    { name: "French" },
    { name: "German" },
    { name: "Italian" },
    { name: "Chinese" },
    { name: "Japanese" },
    { name: "Arabic" },
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
            className="block  text-gray-900 mb-2 text-lg font-bold"
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
              Source
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
            className="block text-gray-900 mb-2 text-lg font-bold"
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
              Target
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
