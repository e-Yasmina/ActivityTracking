import React from 'react';
import { LANGUAGE_VERSIONS } from "../../constants";
import './LanguageSelector.css'

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "#3182ce"; // Blue color

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="language-selector">
      <p className="label">Language:</p>
      <div className="menu">
        <button className="menu-button">{language}</button>
        <div className="menu-list">
          {languages.map(([lang, version]) => (
            <div
              key={lang}
              className={`menu-item ${lang === language ? "active" : ""}`}
              onClick={() => onSelect(lang)}
            >
              {lang}
              <span className="version">({version})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
