import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userController from "../controllers/userController";


function Account({ user, setUser }) {
    const usercontroller = userController;
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({firstName: user.firstName, lastName: user.lastName, email: user.email, password: ""});

    const handleChange = (event) => {
        const { id, value } = event.target;
        
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleAccountUpdate = async (event, history) => {
        event.preventDefault();

        const request = await usercontroller.update(formData).then(res => {
            if (res.data.status === 'success') {
              res.data.user = {
                ...res.data.user,
                loggedIn: true,
              }
              setUser(res.data.user)
            }
          });
    }

    return (<>
        <a href={'/profile/' + user._id} className="btn btn-primary mb-3">See your public profile</a>
        <form onSubmit={handleAccountUpdate}>
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
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} autoComplete="email" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} autoComplete="current-password" />
            </div>
            <button type="submit" className="btn btn-primary">Update Account</button>
        </form>
    </>);
}

export default Account;