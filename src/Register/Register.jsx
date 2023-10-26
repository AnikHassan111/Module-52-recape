import { Link } from "react-router-dom";
import Navvar from "../pages/Shared/Navvar/Navvar";
import { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthProvider";



const Register = () => {

    const {creatUser} = useContext(ContextApi)

    let handleRegister = (e) => {
        e.preventDefault()
        let form = new FormData(e.currentTarget)
        let email = form.get('email')
        let name = form.get('name')
        let PhotoUrl = form.get('PhotoUrl')
        let password = form.get('password')
        console.log(email, password,PhotoUrl,name);

        creatUser(email,password)
        .then(result =>{
            console.log(result);
        }) 
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div>
        <Navvar></Navvar>
        <div>
            <h1 className="text-center font-bold text-3xl">Register Now</h1>
            <div className="hero min-h-full ">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input type="text" placeholder="PhotoUrl" name="PhotoUrl" className="input input-bordered" required />
                    </div><div className="form-control">
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>You Have An Account ? <Link className="text-blue-600" to={'/login'}>Logins</Link> </p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;