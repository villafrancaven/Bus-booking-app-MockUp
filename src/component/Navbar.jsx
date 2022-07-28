import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Register';
import './Navbar.css';
import Promos from './Promos';
import SearchPage from './SearchPage';
import NotFound from './NotFound';
import Payment from './Payment';
import { useSelector } from 'react-redux';
import { selectLoginState, selectUser } from '../features/userSlice';

function Navbar() {
    const userLoggedIn = useSelector(selectLoginState);
    const user = useSelector(selectUser);

    return (
        <Router>
            <nav className='nav'>
                <ul className='nav__menu'>
                    <li>
                        <a href='/' className='nav__name'><Link to="/">Bus<span className='nav__span'>App</span></Link></a>
                    </li>
                    <li>
                        <a href='/'><Link to="/">Home</Link></a>
                    </li>
                    <li>
                        <a href='/promos'><Link to="/promos">Promos</Link></a>
                    </li>
                </ul>
                <div className='nav__right'>
                    <a href='/login'><Link to="/login">
                        {user === null 
                        ? <p>Login</p>
                        : userLoggedIn.loggedIn === true
                        ? <p>{user.firstName}</p>
                        : <p>Login</p>
                        }
                        </Link></a>
                </div>
            </nav>

            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Registration />}/>
                <Route path='/promos' element={<Promos />}/>
                <Route path='/search' element={<SearchPage />}/>
                <Route path='/payment' element={<Payment />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </Router>
    );
}

export default Navbar;