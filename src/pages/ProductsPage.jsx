import { useEffect, useState } from 'react';
import Product from '../components/Product';
import { useSearchParams } from 'react-router';

const ProductsPage = ({ isLoggedIn }) => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get('q');
    const url = searchQuery
      ? `https://my-json-server.typicode.com/mongchongi/fashion-store/products?q=${searchQuery}`
      : 'https://my-json-server.typicode.com/mongchongi/fashion-store/products';

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
  }, [query]);

  return (
    <div className='product-list'>
      {products.map((product) => (
        <Product key={product.id} product={product} isLoggedIn={isLoggedIn} />
      ))}
    </div>
  );
};

export default ProductsPage;
