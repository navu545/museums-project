import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App"; // App.js contains your root component
import "./global.css";


createRoot(document.getElementById("root")).render(<App/>);

