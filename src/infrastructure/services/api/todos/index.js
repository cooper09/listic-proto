import axios from 'axios';

export default {
    getAll: async () => {
       // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
       const response = await axios.get('./data.json');
        return response.data
    }
}