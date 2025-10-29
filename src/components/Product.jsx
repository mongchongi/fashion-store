import { useNavigate } from 'react-router';

const Product = ({ product, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleGoToDetailPage = () => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 서비스입니다. 로그인 후 다시 시도해주세요.');
    }

    navigate(`/products/${product.id}`);
  };

  return (
    <div className='product' onClick={handleGoToDetailPage}>
      {product?.new && <span className='product__badge'>NEW</span>}
      <img className='product__image' src={product?.img} alt={product?.title} />
      {product?.choice && <p className='product__choice'>Conscious choice</p>}
      <h4 className='product__title'>{product?.title}</h4>
      <p className='product__price'>₩ {product?.price}</p>
    </div>
  );
};

export default Product;
