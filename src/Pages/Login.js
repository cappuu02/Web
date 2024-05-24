import React, { useEffect, useState } from 'react';


function Login() {
  const [accessi, setAccessCount] = useState(0);
  const [data_ultimo_accesso, setLastAccess] = useState(new Date());
  const [data_registrazione, setFirstReg] = useState(new Date());

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(emailReg)) {
      setEmailError("Please enter a valid email address.");
      
      setTimeout(() => {
        setEmailError("");
      }, 700); 
      return;
    }

    let email = emailReg;
    let password = passwordReg;
    let reg = 1;

    if (email === "" || password === "") {
      const label = document.createElement('label');
      label.textContent = 'Please fill all the fields';
      label.style.color = 'red';
      label.style.position = 'absolute';
      label.style.top = '70%';
      label.style.left = '65.5%';
      label.style.zIndex = 1000;
      document.body.appendChild(label);

      setTimeout(() => {
        label.remove();
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
        const label = document.createElement('label');
        label.textContent = 'Registration successful';
        label.style.color = 'green';
        label.style.position = 'absolute';
        label.style.top = '70%';
        label.style.left = '65.5%';
        label.style.zIndex = 1000;
        document.body.appendChild(label);

        setTimeout(() => {
          label.remove();
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
        const label = document.createElement('label');
        label.textContent = 'This email is already used';
        label.style.color = 'red';
        label.style.position = 'absolute';
        label.style.top = '70%';
        label.style.left = '64.5%';
        label.style.zIndex = 1000;
        document.body.appendChild(label);

        setTimeout(() => {
          label.remove();
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
      const label = document.createElement('label');
      label.textContent = 'Please fill all the fields';
      label.style.color = 'red';
      label.style.position = 'absolute';
      label.style.top = '73%';
      label.style.left = '22.5%';
      label.style.zIndex = 1000;
      document.body.appendChild(label);

      setTimeout(() => {
        label.remove();
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
        const label = document.createElement('label');
        label.textContent = 'Login successful';
        label.style.color = 'green';
        label.style.position = 'absolute';
        label.style.top = '73%';
        label.style.left = '23.9%';
        label.style.zIndex = 1000;
        document.body.appendChild(label);

        document.cookie = `isAuthenticated=true; max-age=${60 * 60 * 24 * 7}; path=/`;

        

        setTimeout(() => {
          label.remove();
        }, 700);

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
        const label = document.createElement('label');
        label.textContent = 'Invalid Email or Password';
        label.style.color = 'red';
        label.style.position = 'absolute';
        label.style.top = '73%';
        label.style.left = '21.4%';
        label.style.zIndex = 1000;
        document.body.appendChild(label);

        setTimeout(() => {
          label.remove();
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

  useEffect(() => {
    const container = document.getElementById('container');
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
        <div className="container" id="container">
          <div className="form-container sign-up">
            <form onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <span>Use your email for registration</span>

              <input type='email' placeholder='Email' onChange={(e) => { setEmailReg(e.target.value) }} />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              <input type='password' placeholder='Password' onChange={(e) => { setPasswordReg(e.target.value) }} />
              <button>Sign up</button>
              <button id='loginCELL'>Login</button>
            </form>
          </div>

          <div className="form-container sign-in">
            <form onSubmit={handleLogin}>
              <h1>Sign in</h1>
              <span>Use your email and password</span>
              <input type='email' placeholder='Email' onChange={(e) => { setEmailLogin(e.target.value) }} />
              <input type='password' placeholder='Password' onChange={(e) => { setPasswordLogin(e.target.value) }} />
              <a href='#'>Forgot your password?</a>
              <button >Sign in</button>
              <button id='registerCELL'>Register</button>
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
      </div>
    </>
  );
}

export default Login;