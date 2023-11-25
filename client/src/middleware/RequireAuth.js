import { useEffect } from "react";
import userController from "../controllers/userController";
import { Navigate } from "react-router-dom";

export default function RequireAuth(props) {

    const usercontroller = userController();

    useEffect(() => {
        if (usercontroller.user.loggedIn === null) {
            usercontroller.checkAuth();
        }
    }, []);

    if (usercontroller.user.loggedIn === null || usercontroller.user.loggedIn === false) {
        console.log("You shouldn't be here!");

        return <Navigate to="/"></Navigate>;
    }

    return <>{props.children}</>;
}
