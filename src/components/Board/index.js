import { useState } from "react";
import Square from "./Square";

console.log(useState);

const Board = () => {
  const [contents, setContents] = useState(Array.from({ length: 9 }, () => ""));
  const [current, setCurrent] = useState("X");

  function handleClick(ev) {
    setContents((prevContents) => {
      const newContents = [...prevContents];
      newContents[ev.target.dataset.num] = current;
      setCurrent(current === "X" ? "O" : "X");
      return [...newContents];
    });
  }

  function renderSquares(sq) {
    return sq.map((cont, index) => (
      <Square key={index} num={index} content={cont} handler={handleClick} />
    ));
  }

  return <main className="container mx-auto">{renderSquares(contents)}</main>;
};

export default Board;
