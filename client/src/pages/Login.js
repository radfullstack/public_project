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

    return (
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} autoComplete="current-password" required />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="terms" />
                <label className="form-check-label" htmlFor="terms">Agree to our terms</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
}

export default Login;