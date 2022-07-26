import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import ReviewList from "./components/ReviewList";
import NavBar from "./components/NavBar";

//USER CONTENT

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to HB- Gaming Reviews</h1>
        </header>
        <NavBar />
        <h2>Take a look at our lastest reviews</h2>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/reviews/:category" element={<ReviewList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
