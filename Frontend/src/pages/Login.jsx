import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { loginUserService } from '../services/user.service';
import { useLoginError } from '../hooks/useLoginError';
//import { useLoginError } from "../hooks"
import './Login.css';

export const Login = () => {
  //! estados
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [loginOk, setLoginOk] = useState(false);
  const { login, setUser } = useAuth();

  //! 1) funcion que gestiona los datos del formulario
  const formSubmit = async (formData) => {
    // llamada al backend
    setSend(true);
    setRes(await loginUserService(formData));
    setSend(false);
  };

  //! 2) hooks que gestiona los errores
  useEffect(() => {
    useLoginError(res, setRes, login, setLoginOk);
  }, [res]);

  useEffect(() => {
    setUser(() => null);
    localStorage.removeItem('user');
  }, []);

  //! 3) estados de navegacion
  if (loginOk) {
    if (res.data.user.check === false) {
      return <Navigate to="/verifyCode" />;
    } else {
      return <Navigate to="/profile" />;
    }
  }

  return (
    <>
      <div className="form-wrap">
        <h1 className="text-serif">CLUB ACCESS</h1>
        <p className="text-muted text-uppercase">Welcome back to Picasso Performance</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                } 
              })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <button
            className="btn-primary-luxury"
            type="submit"
            disabled={send}
          >
            SIGN IN
          </button>
          
          <p className="bottom-text" style={{marginTop: '20px'}}>
            <small>
              <Link to="/forgotPassword" style={{color: 'var(--accent-gold)'}}>
                FORGOT PASSWORD?
              </Link>
            </small>
          </p>
        </form>
      </div>
      <div className="text-center" style={{marginBottom: '120px'}}>
        <p className="text-muted">
          NOT A MEMBER? <Link to="/register" style={{color: 'var(--text-main)', fontWeight: '600'}}>JOIN THE CLUB</Link>
        </p>
      </div>
    </>
  );
};