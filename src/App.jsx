import React from 'react';
import Board from './Components/Board';
import './Styles/root.style.scss';
const App = () => {
  return (
    <div className="app">
      <h1>TicTacToe</h1>
      <Board />
    </div>
  );
};

export default App;
// export default () => <div>TicTacToe</div>;
