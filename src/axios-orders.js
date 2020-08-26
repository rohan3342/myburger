import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bdf5b.firebaseio.com/'
});

export default instance;