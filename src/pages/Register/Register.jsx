import { Link } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const { creatUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        console.log(name, email, photo, password);
        creatUser(email,password)
            .then(result => {
            console.log(result.user)
        })
            .catch(error => {
                console.error(error);
        })

    };


    return (
        <div>
            <Nav></Nav>
            <div className="hero py-6 bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Register now!</h1>

                    </div>
                    <div className="card  w-full  shadow-2xl bg-base-100">
                        <div className="px-36 py-8">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                   
                                </div>
                                <div className=" flex justify-start items-center mt-2">
                                    <input type="checkbox" name="checkbox" id="" />
                                    <label className="label">
                                        <span className="label-text">Accept Term & Conditions</span>
                                    </label>
                                   
                                </div>

                                <div className="form-control mt-6">
                                    <button className="text-white btn btn-primary mb-3">Register</button>
                                    <p >Already Have An Account ? go to
                                        <Link to='/login' className="text-violet-700 font-bold"> Login</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;