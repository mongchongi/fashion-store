import './App.css';
import { Routes, Route, useLocation } from 'react-router';
import ProductsPage from './pages/ProductsPage';
import SignInPage from './pages/SignInPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './components/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 2. 전체 상품 페이지에서는 전체 상품 목록 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지로 이동
// 4. 상품 상세 보기 눌렀을 때 로그인 안 되어 있으면 로그인 페이지로 이동
// 5. 상품 상세 보기 눌렀을 때 로그인 되어 있으면 상세 페이지로 이동
// 6. 로그아웃 버튼을 누르면 로그아웃 된다
// 7. 로그아웃 되면 상품 상세 페이지를 볼 수 없다 다시 로그인 페이지가 보인다
// 8. 로그인 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
// 9. 상품을 검색할 수 있다

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  return (
    <div className='container'>
      {location.pathname !== '/sign-in' && <Navbar />}
      <Routes>
        <Route path='/' element={<ProductsPage isLoggedIn={isLoggedIn} />} />
        <Route path='/products/:id' element={<PrivateRoute isLoggedIn={isLoggedIn} />} />
        <Route path='/sign-in' element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
};

export default App;
