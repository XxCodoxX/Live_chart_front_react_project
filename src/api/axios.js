import axios from "axios";

const BASE_API = "http://localhost:8000";

const instance = axios.create({

    baseURL:BASE_API

});

export default instance;