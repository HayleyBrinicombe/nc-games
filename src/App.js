import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import ReviewList from "./components/ReviewList";
import NavBar from "./components/NavBar";
import StrategyReviews from "./components/StrategyReviews";
import HiddenRolesReviews from "./components/HiddenRolesReviews";
import DexterityReviews from "./components/DexterityReviews";
import PushYourLuckReviews from "./components/PushYourLuckReviews";
import RollAndWriteReviews from "./components/RollAndWriteReviews";
import DeckBuildingReviews from "./components/DeckBuilding";
import EngineBuildingReviews from "./components/EngineBuildingReviews"


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
          <Route path="/strategy" element={<StrategyReviews />} />
          <Route path="/hidden-roles" element={<HiddenRolesReviews />} />
          <Route path="/dexterity" element={<DexterityReviews />} />
          <Route path="/push-your-luck" element={<PushYourLuckReviews />} />
          <Route path="/roll-and-write" element={<RollAndWriteReviews />} />
          <Route path="/deck-building" element={<DeckBuildingReviews />} />
          <Route path="/engine-building" element={<EngineBuildingReviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
