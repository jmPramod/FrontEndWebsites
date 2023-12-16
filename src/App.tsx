import React, { Suspense, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <Suspense fallback={'loading....'}>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/home" element={<Home />}></Route>

            <Route path="/about" element={<About />}></Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
