import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth.context';

import './default.layout.css';
function DefaultLayOut() {

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isLoggedIn && location.pathname !== '/login') {
    navigate('/login')
    return null
  }

  if (isLoggedIn && location.pathname === '/login') {
    navigate('/');
    return null;
  }

  return (
    <div id='layout'>
      <header id='header'>
        <Link to='/'>
          <h1>Cool~ ToDo List</h1>
        </Link>
      </header>

      <Outlet />
      <footer id='footer'>
        제작자:변경원
      </footer>
    </div>
  )
}

export default DefaultLayOut