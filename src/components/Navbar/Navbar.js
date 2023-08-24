import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser, search} from '../../stateManager/actionCreators';
import decode from 'jwt-decode';
import plusIcon from '../../assets/images/plus-solid.svg';
import searchIcon from '../../assets/images/search-button.svg';
import './Navbar.css';

const initialState = {
  searchWord: ""
}

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('profile')));
  const [searchData, setSearchData] = useState(initialState);


  // const [userData, setUserData] = useState(null);

  const logout = () => {
    dispatch(logoutUser(navigate));

    setUserData(null);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(search(searchData));

    setSearchData(initialState);

  }

  const handleChange = (event) => {
    setSearchData({searchWord: event.target.value });
  }

  useEffect(() => {
    const token = userData?.token;

    if (token) {
      const decodeToken = decode(token);

      if (decodeToken.exp * 1000 < new Date().getTime()) logout();
    }

    /* reason -> reason why we are setting the user again, because useState only sets the state only once during the first render of the component.
    now, suppose user has logged out, and another user has logged in. In that case, the user state will not change. In that case,
    we have to set user data to update.

    location reason -> if the user is in the same page, we will do nothing, but in expired state, if they go to any other page,
    then logout.
    */

    setUserData(JSON.parse(localStorage.getItem('profile')))
  }, [location]);

  if (location.pathname === '/auth') {
    return null;
  }

  return (
    <nav className="navbar-container">
      <div>
        <Link className="navbar-brand" to="/">TweetsVibe</Link>
      </div>
      <div className="navbar-nav">
        {userData ?
          <div className="nav-item">
            {/* <img src={plusIcon} alt="plus icon" /> */}
            <form className='navbar-form' onSubmit={handleSubmit}>
              <input
                type="text"
                name="searchWord"
                placeholder='Search Word'
                onChange={handleChange}
                value={searchData.searchWord}
              />
            <img src={searchIcon} alt="search icon" onClick={handleSubmit} />
            </form>
            <div className="username">{userData.user.username}</div>
            <div className='auth-btn' onClick={logout} >Logout</div>
          </div> :
          <div className="nav-item">
            <Link className='auth-btn' to="/auth" >Login</Link>
          </div>
        }

      </div>
    </nav>
  );
};

export default Navbar;