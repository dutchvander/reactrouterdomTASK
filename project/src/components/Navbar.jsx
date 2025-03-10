import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/tic-tac-toe' ? 'active' : ''}>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
        <li className={location.pathname === '/todo-list' ? 'active' : ''}>
          <Link to="/todo-list">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;