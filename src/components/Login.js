import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './middleware/AuthContext';
import { userLogin } from './hooks/userHook';

const Login = () => {
    const navigate = useNavigate();
    
    sessionStorage.clear();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            
            const res = await userLogin(email, password);
            if (res.token) {
                const { token, id, username, role } = res;
                await login(token, id, username, role);
                navigate('/toys');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div class="container">
            <div class="row m-5 no-gutters shadow-lg">
                <div class="col-md-6 d-none d-md-block">
                    <img src="images/register.png" 
                    class="img-fluid" style={{minHeight:"100%"}} alt="" />
                </div>

                <div class="col-md-6 bg-white p-5">
                    <h3 class="pb-3">Login Form</h3>

                    <div class="form-style">
                            <div class="form-group pb-3">    
                                <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}
                                    name="email"
                                />   
                            </div>
                            
                            <div class="form-group pb-3">   
                                <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1"
                                    value={password} onChange={(e)=>setPassword(e.target.value)}
                                    name="password"
                                />
                            </div>

                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <input name="" type="checkbox" value="" /> 
                                    <span class="pl-2 font-weight-bold">Remember Me</span>
                                </div>
                                <div>
                                        <a href="*">Forget Password?</a>
                                </div>
                            </div>

                            <div class="pb-2">
                                <button
                                    type="button"
                                    class="btn btn-dark w-100 font-weight-bold mt-2"
                                    onClick={handleLogin}
                                    >
                                    Submit
                                </button>
                            </div>

                    <div class="sideline">OR</div>
                        <div>
                            <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2">
                                <i class="fa fa-facebook" aria-hidden="true"></i> Login With Facebook
                            </button>
                        </div>
                    <div class="pt-4 text-center">
                        Get Members Benefit. <a href="/register">Sign Up</a>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
