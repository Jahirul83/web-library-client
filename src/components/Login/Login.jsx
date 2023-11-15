import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";


const Login = () => {
    const { Login, SignInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState(''); 

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        Login(email, password)
            .then((result) => {
                console.log(result.user);
                setError('');
                swal("Good job!", "You clicked the button!", "success");
            }).catch((err) => {
                console.log(err)
                setError(err);
            });
    }

    const handleGoogleLogin= () => {
        SignInWithGoogle()
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
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
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div>
                                <p className="text-center">or <br />
                                    <button onClick={handleGoogleLogin} className="btn btn-block">Google</button>
                                </p>
                                <p>if You do not have an account <Link className="btn btn-link" to='/register'>Register</Link></p>
                                {
                                    error && <p className="text-red-600">{error.message}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;