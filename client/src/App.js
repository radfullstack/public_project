import './App.css';

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import userController from './controllers/userController';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import RequireAuth from './middleware/RequireAuth';

function App() {
  const usercontroller = userController();
  
  useEffect(() => {
    if (usercontroller.user.loggedIn === null) {
      usercontroller.checkAuth();
    }
  }, [])

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Public Project</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
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
      <div className="container py-4">
        
        {/* Trigger alerts based on the responses from controllers */}
        <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
          <strong>Holy guacamole!</strong> You did it.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        
        <Routes>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
        </Routes>
      </div>

      
      <nav class="navbar sticky-bottom bg-dark" data-bs-theme="dark">
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
