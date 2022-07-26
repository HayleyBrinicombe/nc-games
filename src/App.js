import "./App.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import ReviewList from "./components/ReviewList";
import NavBar from "./components/NavBar";
import StrategyReviews from "./components/StrategyReviews";

//USER CONTENT

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to HB- Gaming Reviews</h1>
        </header>
        <NavBar />
        <p>Take a look at our lastest reviews</p>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/strategy" element={<StrategyReviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
