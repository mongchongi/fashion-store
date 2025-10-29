import { Navigate } from 'react-router';
import ProductDetailPage from '../pages/ProductDetailPage';

const PrivateRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <ProductDetailPage /> : <Navigate to={'/sign-in'} />;
};

export default PrivateRoute;
