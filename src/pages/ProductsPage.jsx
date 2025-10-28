import { useEffect, useState } from 'react';
import Product from '../components/Product';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = 'http://localhost:4000/products';

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
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
