import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import ReviewList from "./components/ReviewList";
import NavBar from "./components/NavBar";

import GetSingleReview from "./components/GetSingleReview";

//USER CONTENT

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to HB- Gaming Reviews</h1>
        </header>
        <NavBar />
        <h3>Keep us updated with your gaming thoughts ;)</h3>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/reviews/:category" element={<ReviewList />} />
          <Route path="/review/:review_id" element={<GetSingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
