import React from 'react';
import Square from './Square';

const Board = ({ board, showNumber, winningCombination }) => {
  const updatePosition = position => {
    const isWinningCombination = winningCombination.includes(position);
    return (
      <Square
        button={board[position]}
        click={() => showNumber(position)}
        isWinningCombination={isWinningCombination}
      />
    );
  };

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
