import axios from "axios";
const baseUrl = 'http://localhost:3030/api/'

const login = async (data) => {
    await axios.post(`${baseUrl}auth/login`, data).then(response => {
        // Add Authorization token in the headers
        const config = axios.interceptors.request.use(function (config) {
            const token = response.data.data.Token;
            // check if token exists or not based on that set the header
            if (token) {
                config.headers.Authorization =  'Bearer ' + token;
            } else {
                config.headers.Authorization =  null;
            }
            return config;
        });
        console.log("response.data", response.data)
        return response.data
    })
    .catch(error => {
        console.log(error)
    })
}

export {
    login
}