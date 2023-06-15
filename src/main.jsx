import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./views/Home.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<App />} />
          <Route path="/Home" element={<NavigationBar />} />
          <Route
            path="*"
            element={<p>NOT FOUND {console.log("Error 404")}</p>}
          />
        </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);
