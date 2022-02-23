import axios from 'axios';

// export default axios.create({
//   baseURL: "http://localhost:5000/api/",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

const instance = axios.create({
    baseURL: 'http://localhost:3005',
    // baseURL: "http://192.168.1.24:3005",
    timeout: 30000,
    headers: {
        // 'Access-Control-Allow-Origin' : '*',
        'Content-type': 'application/json'
    }
});

export default instance;
