import axios from 'axios';

// const apiBaseURL=`http://192.168.29.66:6200/api/v1`
// const apiBaseURL=`http://127.0.0.1:6200/api/v1`
const apiBaseURL=`http://localhost:6200/api/v1`

const apiClient = axios.create({
  baseURL: apiBaseURL, // Your base API URL
});

// Export the Axios instance for use across the app
export {apiClient, apiBaseURL} ;