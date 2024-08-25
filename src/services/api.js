import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.reachinbox.ai',
});

export default instance;
