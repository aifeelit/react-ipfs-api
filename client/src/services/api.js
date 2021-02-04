import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
  baseURL: config.NODE_API_URL 
});

export async function createAPIKey() {
  try {
    const response = await apiClient.post('/key');
    return response.data;
  } catch(err) {
    console.error(err);
  };
};

export async function disableAPIKey(id) {
  try {
    const response = await apiClient.post('/key/disable', {
      id
    });
    return response.data;
  } catch(err) {
    console.error(err);
  };
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
 