import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userController from "../controllers/userController";


function Register() {
    const usercontroller = userController;
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", password: ""});

    const handleChange = (event) => {
        const { id, value } = event.target;
        
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleRegistration = async (event, history) => {
        event.preventDefault();

        const request = await usercontroller.register(formData);
        
        navigate('/login', {state: { data: request.data }});
    }

    
    const handleLoginRedirect = async (event, history) => {
        event.preventDefault();
        
        navigate('/login');
    }

    return (
        <div className="container pt-5 my-5">
            <div className="col-md-4">
                <form onSubmit={handleRegistration}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} autoComplete="current-password" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="terms" required />
                        <label className="form-check-label" htmlFor="terms">I agree to terms and conditions</label>
                    </div>
                    <button type="submit" className="btn btn-dark">SIGN UP</button>
                </form>
            </div>
            <div className='pt-4 d-flex flex-column justify-content-center'>
                <p>
                If you have an account with us <button onClick={handleLoginRedirect} className="btn btn-info ms-1">SIGN IN</button>
                </p>
            </div>
        </div>
    );
}

export default Register;