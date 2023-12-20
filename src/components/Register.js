import React, {useState} from "react";
import { CreateUser } from './hooks/userHook';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userRePass, setUseRePass] = useState("");

    const handleSubmit = async () => {
        if(userName ==="" && userPass ==="" && userEmail ==="" && userRePass ==="" ){
            alert("All input fields are required!");
            return;
        }
        if(userPass !== userRePass){
            alert("Passwords do not match");
            return;
        }
        const  user = {
            name : userName,
            email : userEmail,
            password : userPass
        };
        await CreateUser(user);
        navigate("/login");
    }

    return(
        <section class="vh-100" style={{backgroundColor: "#eee"}}>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style={{borderRadius: "25px"}}>
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <form class="mx-1 mx-md-4">

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example1c" class="form-control" 
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                    <label class="form-label" for="form3Example1c">Your Name</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" class="form-control" 
                                        onChange={(e) => setUserEmail(e.target.value)}
                                    />
                                    <label class="form-label" for="form3Example3c">Your Email</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4c" class="form-control" 
                                        onChange={(e) => setUserPass(e.target.value)}
                                    />
                                    <label class="form-label" for="form3Example4c">Password</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4cd" class="form-control" 
                                        onChange={(e) => setUseRePass(e.target.value)}
                                    />
                                    <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                </div>
                            </div>

                            <div class="form-check d-flex justify-content-center mb-5">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                <label class="form-check-label" for="form2Example3">
                                    I agree all statements in <a href="#!">Terms of service</a>
                                </label>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" class="btn btn-primary btn-lg"
                                    onClick={handleSubmit}
                                >Register</button>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <a href="/login" >Already have an account?</a>
                            </div>
                            </form>

                        </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="images/register2.legacy"
                                class="img-fluid rounded" alt="Sample image" />

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}

export default Register;