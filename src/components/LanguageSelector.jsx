import React from "react";

export const LanguageSelector = ({
  selectedSourceLanguage,
  selectedTargetLanguage,
  onSourceLanguageChange,
  onTargetLanguageChange,
}) => {
  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
  ];

  return (
    <div className="language-selector">
      <div>
        <label htmlFor="source-language-select">Source Language: </label>
        <select
          id="source-language-select"
          value={selectedSourceLanguage}
          onChange={(e) => onSourceLanguageChange(e.target.value)}
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="target-language-select">Target Language: </label>
        <select
          id="target-language-select"
          value={selectedTargetLanguage}
          onChange={(e) => onTargetLanguageChange(e.target.value)}
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
