import './App.css';
import { Routes, Route, useLocation } from 'react-router';
import ProductsPage from './pages/ProductsPage';
import SignInPage from './pages/SignInPage';
import Navbar from './components/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  return (
    <div className='container'>
      {location.pathname !== '/sign-in' && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path='/' element={<ProductsPage isLoggedIn={isLoggedIn} />} />
        <Route path='/products/:id' element={<PrivateRoute isLoggedIn={isLoggedIn} />} />
        <Route path='/sign-in' element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
};

export default App;
