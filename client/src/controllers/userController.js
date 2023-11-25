const userController = () => {
    var user = {
        loggedIn: null,
        firstName: "",
        lastName: "",
        email: "",
    }

    var userRegForm = {
        firstName: "",
        lastName: "",
        email: "",
        password:""
    }

    function checkAuth() {
        console.log('Query server api')
    }
    
    return {
        user,
        userRegForm,
        checkAuth
    }
}

export default userController;