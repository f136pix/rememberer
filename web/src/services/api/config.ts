import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['withCredentials'] = 'true';



export default axios;