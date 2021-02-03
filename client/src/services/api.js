import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
  baseURL: config.NODE_API_URL 
});

export async function getLogs(id){
  try {
    console.log('ID: ', id);
    const identifier = '';
    const response = await apiClient.get(`/logs/${identifier}`);
    console.log('Response: ', response);
    return response.data;
  } catch(err){
    console.error(err)
  }
};

export async function getAPIKeys() {
  try {
    const response = await apiClient.get('/keys');
    return response.data;
  } catch(err) {
    console.error(err);
  };
};

export async function loginUser(credentials) {
  try {
    const response = await apiClient.post('/login', {
      credentials
    });
    return response.data;
  } catch(err) {
    console.error(err);
  };
};
 