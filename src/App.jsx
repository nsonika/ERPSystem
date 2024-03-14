import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const storedAuth = localStorage.getItem('isAuth');
  const [isAuth, setIsAuth] = useState(storedAuth === 'true');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const signUserOut = () => {
    setIsAuth(false);
  };


  return (
    <Router>
      <div className="app-container">
        {/* Show Navbar if the user is authenticated and the window width is less than 800 pixels */}
        {isAuth && windowWidth < 800 && <Navbar isAuth={isAuth} signUserOut={signUserOut} />}
        {/* Show Sidebar if the user is authenticated and the window width is 800 pixels or more */}
        {isAuth && windowWidth >= 800 && <Sidebar signUserOut={signUserOut} />}
        <div className="main-container">
          <Routes>
            <Route path="/" element={isAuth ? <Dashboard /> : <Login setIsAuth={setIsAuth} />} />
            {isAuth && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}









export default App;
