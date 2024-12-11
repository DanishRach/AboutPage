import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

function Navbar() {
  return (
    <nav
      style={{
        marginLeft: 100,
        marginTop: 20,
        padding: "1rem",
        color: "#fff",
        backgroundColor: "transparent",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://webiste-gamers.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Home
          </a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://github.com/DanishRach/about"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Project
          </a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://webiste-gamers.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Game
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Navbar2() {
  return (
    <nav
      style={{
        marginLeft: 1280,
        marginTop: 20,
        padding: "1rem",
        color: "#fff",
        backgroundColor: "transparent",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://github.com/DanishRach"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Github
          </a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://www.linkedin.com/in/danish-rachman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <Navbar2 />
    <App />
  </>
);
