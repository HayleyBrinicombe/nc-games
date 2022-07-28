import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { UserContext } from "./contexts/UserContext";

//COMPONENTS
import ReviewList from "./components/ReviewList";
import NavBar from "./components/NavBar";
import Votes from "./components/Votes";
import GetSingleReview from "./components/GetSingleReview";

//USER CONTENT

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>Welcome to HB- Gaming Reviews ♟️ 🎲</h1>
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
    </UserContext.Provider>
  );
}

export default App;
