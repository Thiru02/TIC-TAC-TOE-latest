import React from 'react';

const Square = ({ button, click }) => {
  return (
    <button type="button" className="square" onClick={click}>
      {button}
    </button>
  );
};

export default Square;
