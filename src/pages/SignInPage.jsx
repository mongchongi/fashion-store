import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const SignInPage = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    if (email === '') {
      alert('이메일을 입력하세요.');
    } else if (password === '') {
      alert('비밀번호를 입력하세요.');
    } else {
      setIsLoggedIn(true);
      navigate('/');
    }
  };

  const handleShowPassword = (e) => {
    if (e.target.tagName !== 'INPUT') {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    }
  };

  const handleChangePassword = (e) => {
    if (e.target.value !== '') {
      e.target.nextSibling.style.display = 'block';
    } else {
      e.target.nextSibling.style.display = 'none';
    }
  };

  return (
    <form className='sign-in' onSubmit={handleSignIn}>
      <Link to={'/'}>
        <img className='sign-in__logo' src={`${import.meta.env.BASE_URL}fashion-store.svg`} alt='fashion store logo' />
      </Link>
      <div className='sign-in__input-group'>
        <label className='sign-in__label'>이메일</label>
        <input className='sign-in__input' type='email' name='email' />
      </div>
      <div className='sign-in__input-group'>
        <label className='sign-in__label'>비밀번호</label>
        <div className='sign-in__password' onClick={handleShowPassword}>
          <input
            className='sign-in__input sign-in__input--password'
            type={showPassword ? 'text' : 'password'}
            name='password'
            onChange={handleChangePassword}
          />
          {showPassword ? (
            <FontAwesomeIcon className='sign-in__password-toggle' icon={faEye} />
          ) : (
            <FontAwesomeIcon className='sign-in__password-toggle' icon={faEyeSlash} />
          )}
        </div>
        <button className='sign-in__button' type='submit'>
          로그인
        </button>
      </div>
    </form>
  );
};

export default SignInPage;
