import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [currentSize, setCurrentSize] = useState('사이즈 선택');
  const [showDropdown, setShowDropdown] = useState(false);

  const { id } = useParams();

  const dropdownRef = useRef(null);

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/mongchongi/fashion-store/products/${id}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      } else if (e.target.tagName === 'LI') {
        setCurrentSize(e.target.textContent);
        setShowDropdown(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className='product-detail'>
      {product?.new && <span className='product-detail__badge'>NEW</span>}
      <img className='product-detail__image' src={product?.img} alt={product?.title} />
      <div className='product-detail__info'>
        <h4 className='product-detail__title'>{product?.title}</h4>
        <p className='product-detail__price'>₩ {product?.price}</p>
        {product?.choice && <p className='product-detail__choice'>Conscious choice</p>}
        <div className='product-detail__size-dropdown' ref={dropdownRef}>
          <button className='product-detail__size-button' type='button' onClick={handleShowDropdown}>
            {currentSize}
            <FontAwesomeIcon icon={showDropdown ? faCaretUp : faCaretDown} />
          </button>
          {showDropdown && (
            <ul className='product-detail__size-list'>
              {product?.size.map((size) => (
                <li className='product-detail__size-item' key={size}>
                  {size}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className='product-detail__buy-button' type='button'>
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
