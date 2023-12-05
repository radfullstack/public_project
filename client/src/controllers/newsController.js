import axios from 'axios';

const newsController = {

    news: [],

    fetchNews: async (event) => {
        const res = await axios.get("/api/news/fetch")
        return res;
    },
}

export default newsController;