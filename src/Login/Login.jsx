import { Link, useLocation, useNavigate } from "react-router-dom";
import Navvar from "../pages/Shared/Navvar/Navvar";
import { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthProvider";

const Login = () => {

    const {singIn} = useContext(ContextApi)

    const location = useLocation()
    const navigate = useNavigate()
    console.log('sdjkfslkdfjs',location);

    let handleLogin = (e) => {
        e.preventDefault()
        let form = new FormData(e.currentTarget)
        let email = form.get('email')
        let password = form.get('password')
        console.log(email, password);

        singIn(email,password)
        .then(res => {
            navigate(location?.state ? location.state : '/')
            console.log(res.result);
        })
        .catch()
    }
    return (
        <div>
            <Navvar></Navvar>
            <div>
                <h1 className="text-center font-bold text-3xl">Please Login</h1>
                <div className="hero min-h-full ">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" required />
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
                        <p>Do not Have An Account ? <Link className="text-blue-600" to={'/register'}>Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;