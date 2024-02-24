import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth.context';

import { useEffect } from 'react';
import './default.layout.css';
function DefaultLayOut() {

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn && location.pathname !== '/login') {
      navigate('/login')

    }

    if (isLoggedIn && location.pathname === '/login') {
      navigate('/');

    }

  }, [isLoggedIn, location, navigate])


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