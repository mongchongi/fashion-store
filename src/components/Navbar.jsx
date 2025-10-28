import { faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

const Navbar = () => {
  const menus = ['여성', 'Divided', '남성', '신생아/유아', 'Sale', '지속가능성'];

  return (
    <div className='nav'>
      <div className='nav__sign-in'>
        <button className='nav__sign-in-button' type='button'>
          로그인
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      </div>
      <div className='nav__logo'>
        <Link to={'/'}>
          <img
            className='nav__logo-image'
            src={`${import.meta.env.BASE_URL}fashion-store.svg`}
            alt='fashion store logo'
          />
        </Link>
      </div>
      <div className='nav__controls'>
        <ul className='nav__menu'>
          {menus.map((menu) => (
            <li className='nav__menu-item' key={menu}>
              {menu}
            </li>
          ))}
        </ul>
        <div className='nav__search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input className='nav__search-input' type='text' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
