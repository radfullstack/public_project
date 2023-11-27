/*import axios from 'axios';

const userController = {
    state: {
        user: {
            loggedIn: null,
            firstName: "",
            lastName: "",
            email: "",
        }
    },
    fetchApi: function(){
        console.log('hello world')

    },

    register: async (event) => {

        const formData  = event;

        const res = await axios.post("/api/auth/register", formData) 

        return res;
    },

    login: async (event) => {

        const formData  = event;

        const res = await axios.post("/api/auth/login", formData)
        
        return res;
    },

    logout: async () => {
    
        await axios.get("/api/auth/logout");
        usersController.state.user.loggedIn = false;

        
    },

    checkAuth: async () => {
        try{
            const res = await axios.get("/api/auth/check-auth").then(

                usersController.state.user.loggedIn = true,
                usersController.state.user.firstName = 'true'
            );
            console.log(usersController.state)
            if (res.data.status === 'success') {
            }
            return res
            
        } catch (err) {
            console.log(err)
        }
    }
}

export default userController;*/