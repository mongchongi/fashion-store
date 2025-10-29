import { useEffect, useState } from 'react';
import Product from '../components/Product';

const ProductsPage = ({ isLoggedIn }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = 'https://my-json-server.typicode.com/mongchongi/fashion-store/products';

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='product-list'>
      {products.map((product) => (
        <Product key={product.id} product={product} isLoggedIn={isLoggedIn} />
      ))}
    </div>
  );
};

export default ProductsPage;
