import React, { useState } from 'react';
import Square from './Square';
let isXNext = false;
const Board = () => {
  const [Board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const showNumber = position => {
    if (Board[position]) {
      return;
    } else {
      setIsXNext(prev => !prev);
      return setBoard(prevValue =>
        prevValue.map((number, pos) => {
          if (pos === position) {
            return isXNext ? 'X' : 'O';
          } else {
            return number;
          }
        })
      );
    }
  };

  const updatePosition = position => {
    return (
      <Square button={Board[position]} click={() => showNumber(position)} />
    );
  };

  console.log(Board);
  return (
    <div className="board">
      <div className="board-row">
        {updatePosition(0)}
        {updatePosition(1)}
        {updatePosition(2)}
      </div>
      <div className="board-row">
        {updatePosition(3)}
        {updatePosition(4)}
        {updatePosition(5)}
      </div>
      <div className="board-row">
        {updatePosition(6)}
        {updatePosition(7)}
        {updatePosition(8)}
      </div>
    </div>
  );
};

export default Board;
