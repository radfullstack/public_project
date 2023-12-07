import axios from 'axios';

const journalController = {

    addPost: async (event) => {
        
        const formData  = event;

        const res = await axios.post("/api/journal/post/add", formData)

        return res;
    },
    
    fetchPosts: async (event) => {
        const res = await axios.get("/api/journal/fetch")
        
        return res;
    },
}

export default journalController;