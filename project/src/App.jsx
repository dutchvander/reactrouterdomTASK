import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import TodoList from './pages/TodoList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/todo-list" element={<TodoList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;