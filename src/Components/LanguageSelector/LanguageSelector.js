import React from "react";
import { LANGUAGE_VERSIONS } from "../../constants";
import "./LanguageSelector.css"

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "#4299e1"; // Equivalent to Chakra's "blue.400"

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="language-selector">
      <label>
        Language:
      </label>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          onClick={(e) => {
            const menu = e.currentTarget.nextSibling;
            menu.style.display = menu.style.display === "block" ? "none" : "block";
          }}
        >
          {language}
        </button>
        <ul>
          {languages.map(([lang, version]) => (
            <li
              key={lang}
              onClick={() => {
                onSelect(lang);
                document.querySelector("ul").style.display = "none"; // Close menu after selection
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = ACTIVE_COLOR;
                e.currentTarget.style.backgroundColor = "#2d3748";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = lang === language ? ACTIVE_COLOR : "#e2e8f0";
                e.currentTarget.style.backgroundColor =
                  lang === language ? "#2d3748" : "transparent";
              }}
            >
              {lang}{" "}
              <span style={{ color: "#718096", fontSize: "0.875rem" }}>({version})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
