import { faBars, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const navigate = useNavigate();

  const menus = ['여성', 'Divided', '남성', '신생아/유아', 'Sale', '지속가능성'];

  const handleCloseSideMenu = (e) => {
    if (e.target.className === 'side-menu') {
      setShowSideMenu(false);
    }
  };

  const handleToggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const keyword = e.target.value;
      navigate(`/?q=${keyword}`);

      setTimeout(() => {
        e.target.value = '';
      }, 0);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {showSideMenu && (
        <div className='side-menu' onClick={handleCloseSideMenu}>
          <ul className='side-menu__list'>
            {menus.map((menu) => (
              <li className='side-menu__item' key={menu}>
                {menu}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className='nav'>
        {windowWidth < 457 && (
          <button className='nav__menu-toggle' type='button' onClick={handleToggleSideMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        {isLoggedIn ? (
          <button className='nav__sign-in nav__sign-in--out' to={'/sign-in'} onClick={() => setIsLoggedIn(false)}>
            로그아웃
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
        ) : (
          <Link className='nav__sign-in nav__sign-in--in' to={'/sign-in'}>
            로그인
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        )}
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
          {windowWidth > 457 && (
            <ul className='nav__menu'>
              {menus.map((menu) => (
                <li className='nav__menu-item' key={menu}>
                  {menu}
                </li>
              ))}
            </ul>
          )}
          <div className='nav__search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input className='nav__search-input' type='text' onKeyDown={handleSearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
