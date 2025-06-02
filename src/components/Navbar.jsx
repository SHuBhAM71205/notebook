import React, { useEffect, useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import AddNoteContext from '../context/addNoteContext';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const [isSticky, setIsSticky] = useState(false);
    const { showAddNote, setShowAddNote } = useContext(AddNoteContext);
    const {isLogin,setLogin}=useState(true);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handlers
    const handleAddClick = () => setShowAddNote(!showAddNote);
    const handleLogin = () => navigate('/AuthForm');
    const handleSignup = () => navigate('/SignupForm');
    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        navigate('/AuthForm');
    };

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light bg-primary${isSticky ? ' sticky-top' : ''}`}
            style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                borderRadius: '0 0 1.5rem 1.5rem',
                padding: '0.75rem 2rem',
                transition: 'box-shadow 0.2s',
                zIndex: 1020
            }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/" style={{ fontWeight: 700, fontSize: '1.7rem', letterSpacing: '2px' }}>
                    <span role="img" aria-label="notebook" style={{ marginRight: '0.5rem' }}>📒</span>
                    Notebook
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item mx-2">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" style={{ fontWeight: 700 }} >Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" style={{ fontWeight: 700 }}>About</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <button
                                className="btn btn-success"
                                style={btnStyle()}
                                onClick={handleAddClick}
                            >
                                + Add
                            </button>
                        </li>

                        {
                            !localStorage.getItem('auth-token')?
                        <li className="nav-item mx-2">
                            <button
                                className="btn btn-outline-light"
                                style={btnStyle()}
                                onClick={handleLogin}
                            >
                                Login/SignUP
                            </button>
                        </li>
                        :<li className="nav-item mx-2">
                            <button
                                className="btn btn-danger"
                                style={btnStyle()}
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                        }
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function btnStyle() {
    return {
        fontWeight: 100,
        padding: '0.1rem 0.5rem',
        borderRadius: '2rem',
        boxShadow: '1 5px 8px rgba(0,0,0,0.15)',
        fontSize: '0.7rem',
        letterSpacing: '1px',
        transition: 'background 0.2s, box-shadow 0.2s'
    };
}
