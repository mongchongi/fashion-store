const Product = ({ product }) => {
  return (
    <div className='product'>
      {product.new && <span className='product__badge'>NEW</span>}
      <img className='product__image' src={product.img} alt={product.title} />
      <h4 className='product__title'>{product.title}</h4>
      <p className='product__price'>₩ {product.price}</p>
    </div>
  );
};

export default Product;
