import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const handleScoreChange = () => {
    setScore((score) => score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const [bestScore, setBestScore] = useState(0);

  const handleBestScore = () => {
    if (bestScore < score) setBestScore(score);
    resetScore();
  };

  return (
    <>
      <Header
        name="MemoryCard Game"
        score={score}
        bestScore={bestScore}
        bestScoreChange={handleBestScore}
      />
      <Main scoreChange={handleScoreChange} bestScoreChange={handleBestScore} />
      <Footer />
    </>
  );
};

export default App;
