import './App.css';

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import userController from './controllers/userController';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import RequireAuth from './middleware/RequireAuth';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  
  const [user, setUser] = useState(userController.state.user);  

  useEffect(() => {
      if (user.loggedIn === null) {
        userController.checkAuth().then(res => {
          if (res.data.status === 'success') {
            res.data.user = {
              ...res.data.user,
              loggedIn: true,
            }
            setUser(res.data.user)
          } else {
            setUser(userController.state.user)
          }
      }).catch(err=>{
        var user = {
          ...userController.state.user,
          loggedIn: false,
        }
        setUser(user)}
      );
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <div className="container py-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<RequireAuth user={user} setUser={setUser}><Dashboard /></RequireAuth>} />
        </Routes>
      </div>

      
      <nav className="navbar sticky-bottom bg-dark" data-bs-theme="dark">
        <div className="container">
          <div className="navbar" id="navbar_bottom">
            <ul className="navbar-nav me-auto my-2 my-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </BrowserRouter>
  );
}

export default App;
