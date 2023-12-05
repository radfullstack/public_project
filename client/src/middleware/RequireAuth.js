import { useEffect, useState } from "react";
import userController from "../controllers/userController";
import { Navigate } from "react-router-dom";

export default function RequireAuth(props) {

    useEffect(() => {
        if (props.user.loggedIn === null) {
          userController.checkAuth().then(res => {
            if (res.data.status === 'success') {
              res.data.user = {
                ...res.data.user,
                loggedIn: true,
              }
              props.setUser(res.data.user)
            } 
        }).catch(err=>{
        });
        }
    }, []);

    if (props.user.loggedIn === null) {
        return  <div>Please login</div>;
    }
    if (props.user.loggedIn === false) {
        return <Navigate to="/"></Navigate>;
    }

    return <>{props.children}</>;
}
