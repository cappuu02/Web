import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {


  const [accessi, setAccessCount] = useState(0);
  const [data_ultimo_accesso, setLastAccess] = useState(new Date());
  const [data_registrazione, setFirstReg] = useState(new Date());

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [email1Error, setEmail1Error] = useState("");

  const [logError, setLogError] = useState("");


  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailError, setEmailError] = useState("");


  const [regError, setRegError] = useState("");


  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    let email = emailReg;
    let password = passwordReg;
    let reg = 1;

    if (!validateEmail(emailReg) & emailReg != "" &  passwordReg != "") {

      setEmailError("Please enter a valid email address.");
      
      setTimeout(() => {
        setEmailError("");
      }, 700); 
      return;
    }
    

    if (email === "" || password === "") {
      
      setEmailError("Please fill all fields.");
      setTimeout(() => {
        setEmailError("");
      
}, 700);

      return;
    }

    try {
      const response = await fetch('http://localhost:3001/utenti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, reg }),
      });

      const esito = await response.text();

      if (esito === 'Registration successful') {

        setRegError("Registration Successful")

        setTimeout(() => {
          setRegError("")

        }, 700);

        let create = 1;
        setFirstReg(new Date());

        try {
          const response = await fetch('http://localhost:3001/user_stats', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, data_registrazione,  create }),
          });
          response.text()

        }catch (error) {
            console.error(error);
            alert('An error occurred');
          }


        return;
      }
      if (esito === 'This email is already used') {

        setEmailError("This email is already in use.");
      

      setTimeout(() => {
        setEmailError("")
      }, 700);
      return;
      }
      else {
        alert(response)
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    let email = emailLogin;
    let password = passwordLogin;
    let login = 1;

    if (email === "" || password === "") {

      setEmail1Error("Please fill all fields")

        setTimeout(() => {
          setEmail1Error("")
        }, 700);

      return;
    }

    try {
      const response = await fetch('http://localhost:3001/utenti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, login }),
      });

      const esito = await response.text();

      if (esito === 'Login successful') {

        setLogError("Login Successful")

        setTimeout(() => {
          setLogError("")
        }, 700);

        document.cookie = `isAuthenticated=true,${emailLogin}; max-age=${60 * 60 * 24 * 7}; path=/`;

        setAccessCount(accessi);
        setLastAccess(new Date());
        let log = 1;

        try {
          const response = await fetch('http://localhost:3001/user_stats', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, accessi, data_ultimo_accesso, log }),
          });
    

        window.location.href = "/";
        return;

      } catch (error) {
        console.error(error);
        alert('An error occurred');
      }
      }
      if (esito === 'This email is not registered') {

        setEmail1Error("Email taken/Invalid Password")

        setTimeout(() => {
          setEmail1Error("")

        }, 700);
        return;
      }
      else {
        alert(response)
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  }


  const handleReturn = async () => {
    window.location.href = '/';
  }

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
            <form onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <span>Use your email for registration</span>
              <input type='email' placeholder='Email' onChange={(e) => { setEmailReg(e.target.value) }} />


              <input type='password' placeholder='Password' onChange={(e) => { setPasswordReg(e.target.value) }} />
              <button>Sign up</button>
              <button id='loginCELL'>Login</button>
              <p class="error-text">&nbsp;  {emailError}</p>
              <p class="good-text">&nbsp;  {regError}</p>
            </form>
          </div>

          <div className="form-container sign-in">
            <form onSubmit={handleLogin}>
              <h1>Sign in</h1>
              <span>Use your email and password</span>
              <input type='email' placeholder='Email' onChange={(e) => { setEmailLogin(e.target.value) }} />
              <input type='password' placeholder='Password' onChange={(e) => { setPasswordLogin(e.target.value) }} />

              <Link to="/Login/MissPassword" id='forgot'>Forgot your password?</Link>
              <button>Sign in</button>

              <button id='registerCELL'>Register</button>
              <p class="error-text">&nbsp;  {email1Error}</p>
              <p class="good-text">&nbsp;  {logError}</p>

            </form>
          </div>

          <div className='toggle-container'>
            <div className='toggle'>
              <div className='toggle-panel toggle-left'>
                <h1>Welcome Back</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className='hidden' id='login'>Sign In</button>
              </div>
              <div className='toggle-panel toggle-right'>
                <h1>Welcome</h1>
                <p>Register with your personal details to use all of site features</p>
                <button className='hidden' id='register'>Sign Up</button>
                
              </div>
            </div>
          </div>
        </div>
        <button id='return_home_btn' onClick={handleReturn}>Return Home</button>
      </div>
    </>
  );
}

export default Login;