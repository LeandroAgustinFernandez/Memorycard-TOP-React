import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import "./Main.css";

const Main = ({ scoreChange, bestScoreChange }) => {
  const [chosen, setChosen] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    getCardInfo();
  }, [chosen]);

  const getCardInfo = async () => {
    const res = await fetch(
      "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]"
    );
    const data = await res.json();
    const results = await data.sort(() => Math.random() - 0.5);
    setCardInfo(results);
  };

  const handleChosenCharacter = (e) => {
    let exist = chosen.find((character) => character === e.target.alt);
    if (!exist) {
      setChosen([...chosen, e.target.alt]);
      scoreChange();
    } else {
      setChosen([]);
      bestScoreChange();
    }
  };

  return (
    <main className="main">
      <CardContainer characters={cardInfo} chosenCard={handleChosenCharacter} />
    </main>
  );
};

export default Main;
