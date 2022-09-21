import React from 'react';

const History = ({ history, onClick, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, count) => {
          return (
            <li key={count}>
              <button
                type="button"
                onClick={() => onClick(count)}
                className={`btn-move ${count === currentMove ? 'active' : ''}`}
              >
                {count === 0 ? `Go to start` : `Go to move ${count}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
