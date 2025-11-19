import React, { useState } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await api.post('/auth/login',{email,password});
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.user._id);
      toast.success('Login successful');
      navigate('/');
    }catch(err){
      toast.error(err.response?.data?.message || 'Login failed');
    }
  }

  return(
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;