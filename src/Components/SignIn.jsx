import Lottie from "lottie-react";
import LoginAnimation from "../assets/Login.json";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import AuthContext from "../Context/AuthContext/AuthContext";
import { useContext } from "react";
import SocialLogin from "../Common/SocialLogin/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const { Login } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        Login(email, password)
            .then((result) => {
                navigate(from);
                toast.success("Welcome back! Login successful.", {
                    position: toast.POSITION.TOP_CENTER,
                });
                console.log("Sign in successful:", result);
            })
            .catch((error) => {
                console.error("Login error:", error);
                toast.error("Login failed. Please try again.", {
                    position: toast.POSITION.TOP_CENTER,
                });
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignIn now!</h1>
                    <div className="max-w-md">
                        <Lottie animationData={LoginAnimation}></Lottie>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <SocialLogin />
                </div>
            </div>
            {/* Toast Container to display toast notifications */}
            <ToastContainer />
        </div>
    );
};

export default SignIn;
