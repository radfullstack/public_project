import axios from 'axios';

const userController = {
    state: {
        user: {
            loggedIn: null,
            firstName: "our guest!",
            lastName: "",
            email: "",
            userPrefs: {}
        },
        userProfile: {
            firstName: "",
            lastName: "",
            email: "",
        }
    },

    register: async (event) => {

        const formData  = event;

        const res = await axios.post("/api/auth/register", formData) 

        return res;
    },

    update: async (event) => {

        const formData  = event;

        const res = await axios.post("/api/auth/update", formData) 

        return res;
    },

    login: async (event) => {

        const formData  = event;

        const res = await axios.post("/api/auth/login", formData)
        
        return res;
    },

    logout: async () => {
        const res = await axios.get("/api/auth/logout");

        return res;
    },

    checkAuth: async () => {

        const res = await axios.get("/api/auth/check-auth")

        return res;
    },

    fetchUser: async (userId) => {

        const res = await axios.get("/api/user/" + userId)

        return res;
    }
}

export default userController;