import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Auth.css'
// import authImage from '../../assets/images/auth-image-nobg.jpg';
import { signupUser, loginUser } from '../../stateManager/actionCreators';


const initialState = {
    email: "",
    password: "",
    username: ""
}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [userData, setUserData] = useState(initialState);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isSignup) {
            dispatch(signupUser(userData, navigate));
        }
        else {
            dispatch(loginUser(userData, navigate));
        }

    }

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const handleSwitch = () => {
        setIsSignup((prevValue) => !prevValue);
        console.log("Hello")
    }


    return (
        <div className="form-container">
            {/* <img className='auth-image-details' src={authImage} alt="two children playing cards" /> */}
            <div className="left-area">
              <p>Join with us to analyze every trend!</p>
            </div>

            <div className="form-area">
                <div className="main-form">
                    <div className="form-head">
                        <div className="form-title">
                            {isSignup ? "Sign up to trends!" : "Welcome back, Analyst!"}
                        </div>
                        <div className="switch" onClick={handleSwitch}>
                            {isSignup ? "Already have an account? Log in" : "Don't have an account? Sign up"}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {isSignup &&
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder='Enter username'
                                    onChange={handleChange}
                                    value={userData.username}
                                />
                            </div>}

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder='Enter email'
                                onChange={handleChange}
                                value={userData.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Enter password'
                                onChange={handleChange}
                                value={userData.password} />
                        </div>
                        <div className="form-group submit-form">
                            <button className="submit-btn" type='submit'><span>{isSignup ? "Signup" : "Login"}</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth