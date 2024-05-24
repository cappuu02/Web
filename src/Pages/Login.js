import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  useEffect(() => {
    const container = document.getElementById('container_login');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const registerCellBtn = document.getElementById('registerCELL');
    const loginCellBtn = document.getElementById('loginCELL');

    if (registerBtn && loginBtn && container && registerCellBtn && loginCellBtn) {
        const handleRegisterClick = () => {
            container.classList.add("active");
            container.classList.add("activeCELL");
        };

        const handleRegisterClick2 = (e) => {
          e.preventDefault();
          container.classList.add("activeCELL");
          container.classList.add("active");
        };

        const handleLoginClick2 = () => {
          container.classList.remove("activeCELL");
          container.classList.remove("active");
        };

        const handleLoginClick = () => {
            container.classList.remove("active");
            container.classList.remove("activeCELL");
        };

        // Aggiungi l'evento di click ai pulsanti "Register" sia nel pannello di accesso che al di fuori
        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);
        registerCellBtn.addEventListener('click', handleRegisterClick2);
        loginCellBtn.addEventListener('click', handleLoginClick2);

        // Cleanup event listeners on component unmount
        return () => {
            registerBtn.removeEventListener('click', handleRegisterClick);
            registerCellBtn.removeEventListener('click', handleRegisterClick2);
            loginBtn.removeEventListener('click', handleLoginClick);
            loginCellBtn.removeEventListener('click', handleLoginClick2);
        };
    }

    // Verifica se il container ha la classe 'activeCell' e aggiungi la classe 'active'
    if (container && container.classList.contains('activeCELL')) {
      container.classList.add('active');
    }
  }, []);

  return (
    <>
      <div id='body_sign_inup'>
        <div className="container_login" id="container_login">
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <span>Use your email for registration</span>
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <button>Sign up</button>
              <button id='loginCELL'>Login</button>
            </form>
          </div>

          <div className="form-container sign-in">
            <form>
              <h1>Sign in</h1>
              <span>Use your email and password</span>
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <Link to="/MissPassword">Forgot your password?</Link>
              <button>Sign in</button>
              <button id='registerCELL'>Register</button>
            </form>
          </div>

          <div className='toggle-container'>
            <div className='toggle'>
              <div className='toggle-panel toggle-left'>
                <h1>Welcome Back</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className='hidden' id='login'>Sign in</button>
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