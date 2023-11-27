
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import userController from '../controllers/userController';
import { useState } from "react";


function Navbar({ user, setUser }) {
    const navigate = useNavigate();
    const { state } = useLocation();
    const handleLogout = async (event) => {
        event.preventDefault();
        
        userController.logout().then(res => {
            if (res.data.status === 'success') {
                setUser({
                    ...userController.state.user, 
                    loggedIn: false,
                })
            }
        }).catch(err=>{});
;
        navigate("/")
    }
    
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container">
            <Link to="/" className="navbar-brand">Public Project <h6 className="d-inline fw-lighter">{'Hello ' + user.firstName}</h6>
                </Link> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav my-2 my-lg-0 ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                {!user.loggedIn ? (<>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </>) : (<>
                    <li className="nav-item">
                    <button className="btn btn-secondary ms-2"onClick={handleLogout}>Logout</button>
                    </li>
                </>)}
              </ul>
            </div>
          </div>
        </nav>
        {state?.data ? (<>
            <div className="container my-3">
                <div className={'alert alert-' + (state.data.status) + " alert-dismissible fade show mb-3"} role="alert">
                    <strong>Holy guacamole!</strong> You did it.<br />{state.data.message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            </>) : ('')
    }
        </>
    );
}

export default Navbar;