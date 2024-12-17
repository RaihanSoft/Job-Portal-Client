import Lottie from "lottie-react"
import LotifiRegister from '../assets/Register.json'
import { toast, ToastContainer } from "react-toastify"
import AuthContext from "../Context/AuthContext/AuthContext"
import { useContext } from "react"

const Regiater = () => {

    const { handleRegister } = useContext(AuthContext)
    const hangleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const userName = form.userName.value
        const password = form.password.value
        const Repassword = form.Repassword.value
        console.log(name, email, userName, password, Repassword)

        handleRegister(email, password)
            .then(result => {
                console.log(result)
            })
            .then(error => {
                console.log(error.message)
            })
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Password validation regex
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*()]/;

        // Check if the email matches the regex
        if (password !== Repassword) {
            setError("Password didn't match");
            return;
          }
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


        // Add any additional logic for registering the user here
        toast.success('Registration successful!');

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <div className="max-w-md" >
                            <Lottie animationData={LotifiRegister} ></Lottie>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={hangleRegister} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" name="userName" placeholder="Username" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Re-Password</span>
                                </label>
                                <input type="password" name="Repassword" placeholder="password" className="input input-bordered" required />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Regiater
