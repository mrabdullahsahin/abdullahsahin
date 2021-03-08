import React from "react";
import "./Footer.css";

function Footer({ config }) {
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer">
      <div className="notice-container">
        <h4>{copyright}</h4>
      </div>
    </footer>
  );
}

export default Footer;
