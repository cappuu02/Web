import man_icon from '../Images/man_icon.svg'
import female_icon from '../Images/Female_icon.svg'
import React, { useEffect } from 'react';

function Login() {

  

  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    if (registerBtn && loginBtn && container) {
      const handleRegisterClick = () => {
        container.classList.add("active");
      };

      const handleLoginClick = () => {
        container.classList.remove("active");
      };

      registerBtn.addEventListener('click', handleRegisterClick);
      loginBtn.addEventListener('click', handleLoginClick);

      // Cleanup event listeners on component unmount
      return () => {
        registerBtn.removeEventListener('click', handleRegisterClick);
        loginBtn.removeEventListener('click', handleLoginClick);
      };
    }
  }, []);


  return (
    <>
    <div id='body_sign_inup'>
      <div class="container" id="container">
        <div class="form-container sign-up">
          <form>
            <h1> Create Account</h1>
            <span>use your email for registration</span>
            <input type='text' placeholder='Name'></input>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <button>Sign up</button>
          </form>
        </div>

        <div class="form-container sign-in">
          <form>
            <h1> Sign in</h1>
            <span>Use your email and password</span>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <a href='#'>forget your password?</a>
            <button>Sign in</button>
          </form>
        </div>
        <div className='toggle-container'>
          <div className='toggle'>
            <div className='toggle-panel toggle-left'>
              <h1>Welcome Back</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className='hidden' id='login'> Sign in</button>
            </div>
            <div className='toggle-panel toggle-right'>
              <h1>Welcome</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className='hidden' id='register'>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


export default Login;


