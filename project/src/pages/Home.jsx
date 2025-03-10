import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Multi-Game App</h1>
      <div className="game-buttons">
        <Link to="/tic-tac-toe" className="game-button">
          Play Tic Tac Toe
        </Link>
        <Link to="/todo-list" className="game-button">
          Open Todo List
        </Link>
      </div>
    </div>
  );
}

export default Home;