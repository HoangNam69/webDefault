import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import './App.css';

const  App = () => {
  return (
    <div>
      <nav classname="navbar navbar-expand-lg bg-light">
        <div classname="container-fluid">
          <div className='container'>
            <a classname="navbar-brand" href="#">Navbar</a>
            <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span classname="navbar-toggler-icon"></span>
            </button>
            <div classname="collapse navbar-collapse" id="navbarNav">
              <ul classname="navbar-nav">
                <li classname="nav-item">
                  <Link to="\">Home</Link>
                </li>
                <li classname="nav-item">
                  <a classname="nav-link" href="#">Features</a>
                </li>
                <li classname="nav-item">
                  <a classname="nav-link" href="#">Pricing</a>
                </li>
                <li classname="nav-item">
                  <a classname="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
