import React, { useState } from 'react';
import Board from './Components/Board';
import calculateWinner from './Winner';
import History from './Components/History';
import './Styles/root.style.scss';

// const App = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isXNext, setIsXNext] = useState(false);
//   const winner = calculateWinner(board);
//   const message = winner
//     ? `Winner is ${winner}`
//     : `Next player is ${isXNext ? 'X' : 'O'}`;
//   const showNumber = position => {
//     if (board[position] || winner) {
//       return;
//     } else {
//       setIsXNext(prev => !prev);
//       return setBoard(prevValue =>
//         prevValue.map((number, pos) => {
//           if (pos === position) {
//             return isXNext ? 'X' : 'O';
//           } else {
//             return number;
//           }
//         })
//       );
//     }
//   };
//   return (
//     <div className="app">
//       {message}
//       <h1>TicTacToe</h1>
//       <Board board={board} showNumber={showNumber} />
//     </div>
//   );
// };

// export default App;

const App = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
      isXNext: false,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;
  const showNumber = position => {
    if (current.board[position] || winner) {
      return;
    } else {
      // setIsXNext(prev => !prev);
      setHistory(prevValue => {
        const last = prevValue[prevValue.length - 1];
        const newBoard = last.board.map((number, pos) => {
          if (pos === position) {
            return last.isXNext ? 'X' : 'O';
          } else {
            return number;
          }
        });
        setCurrentMove(prev => prev + 1);
        return prevValue.concat({ board: newBoard, isXNext: !last.isXNext });
      });
    }
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  // console.log(history);
  return (
    <div className="app">
      {message}
      <h1>TicTacToe</h1>
      <Board board={current.board} showNumber={showNumber} />
      <History history={history} onClick={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
// export default () => <div>TicTacToe</div>;
