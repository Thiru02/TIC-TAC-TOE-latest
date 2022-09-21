import React from 'react';

const Square = ({ button, click, isWinningCombination }) => {
  return (
    <button
      type="button"
      className={`square ${button == 'X' ? 'text-green' : 'text-orange'} ${
        isWinningCombination ? 'winning' : ''
      }`}
      onClick={click}
    >
      {button}
    </button>
  );
};

export default Square;
