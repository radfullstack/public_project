import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import userController from "../controllers/userController";

const UserProfile = () => {
    const { userId } = useParams();
    const [userProfile, setUserProfile] = useState([]);  

    useEffect(() => {
        userController.fetchUser(userId).then(res => {
            setUserProfile(res.data.user)
        }).catch(err=>{ console.log(err)} );
    }, []);
    return (
       <div className="container">
          <h1>Welcome to {userProfile.firstName} profile</h1>
          <p className='fw-bold mt-4'>{userProfile.firstName} info:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Member since: {userProfile.createdAt}</li>
        </ul>
       </div>
    );
   };
   
export default UserProfile;