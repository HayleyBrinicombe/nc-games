import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import ReviewList from "./components/ReviewList";
import NavBar from "./components/NavBar";

//USER CONTENT

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to HB- Gaming Reviews</h1>
      </header>
      <NavBar />
      <p>Take a look at our lastest reviews</p>
      <ReviewList />
      </div>
      
    
  );
}

export default App;
