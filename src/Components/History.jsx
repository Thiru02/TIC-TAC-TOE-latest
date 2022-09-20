import React from 'react';

const History = ({ history, onClick, currentMove }) => {
  return (
    <ul>
      {history.map((_, count) => {
        return (
          <li key={count}>
            <button
              type="button"
              onClick={() => onClick(count)}
              style={{ fontWeight: count === currentMove ? 'bold' : 'normal' }}
            >
              {count === 0 ? `Go to start` : `Go to move ${count}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
