import { useEffect, useState } from "react";
import "./Header.css";

const Header = ({ name, score, bestScore, bestScoreChange }) => {
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (score === 10) winGame()
  }, [score]);

  const winGame = () => {
    setWin(true);
    bestScoreChange();
  };

  return (
    <header className="header">
      <p className="apptitle">{name}</p>
      {win ? <div className="congrats">Congratulations! You Win!</div> : ""}
      <div className="scoretable">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
};

export default Header;
