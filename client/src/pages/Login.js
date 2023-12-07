import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect  } from "react";
import userController from "../controllers/userController";

function Login({ setUser }) {
    const usercontroller = userController;
    const navigate = useNavigate();
    const { state } = useLocation();
    
    useEffect(() => {
        if (state?.data) {
            console.log('there is state')
        }
    }, [])
    
    const [formData, setFormData] = useState({email: "", password: ""});

    const handleChange = (event) => {
        const { id, value } = event.target;
        
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        await usercontroller.login(formData).then(res => {
            res.data.user = {
              ...res.data.user,
              loggedIn: true,
            }
            setUser(res.data.user)
        }).catch();
        
        navigate("/dashboard")
    }
    
    const handleRegisterRedirect = async (event, history) => {
        event.preventDefault();
        
        navigate('/register');
    }

    return (
        <div className="container my-5 pt-5">
            <div className="col-md-4">
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} autoComplete="current-password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        <div className='pt-4 d-flex flex-column justify-content-center'>
            <p>
            If you don't have an account with us <button onClick={handleRegisterRedirect} className="btn btn-info ms-1">SIGN UP</button>
            </p>
        </div>
      </div>
    );
}

export default Login;