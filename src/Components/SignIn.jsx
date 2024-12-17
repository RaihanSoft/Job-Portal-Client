import React, { useContext } from "react";
import Lottie from "lottie-react";
import LoginAnimation from "../assets/Login.json";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../Context/AuthContext/AuthContext";

const SignIn = () => {
    const { CreateUser } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        CreateUser(email, password)

        // Email validation regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Password validation regex
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*()]/;

        // Check if the email matches the regex
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        // Check password conditions
        if (password.length < 8) {
            toast.error('Password must be at least 8 characters long.');
            return;
        }
        if (!uppercaseRegex.test(password)) {
            toast.error('Password must contain at least one uppercase letter.');
            return;
        }
        if (!lowercaseRegex.test(password)) {
            toast.error('Password must contain at least one lowercase letter.');
            return;
        }
        if (!numberRegex.test(password)) {
            toast.error('Password must contain at least one number.');
            return;
        }
        if (!specialCharRegex.test(password)) {
            toast.error('Password must contain at least one special character (!@#$%^&*()).');
            return;
        }

        // Proceed with registration if email and password are valid
        console.log('Email:', email);
        console.log('Password:', password);

        // Add any additional logic for registering the user here
        toast.success('Registration successful!');
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
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;
