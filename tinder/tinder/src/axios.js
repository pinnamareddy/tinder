import axios from "axios"

const instance = axios.create({
    baseURL:"https://tinder-c-l-o-n-e.herokuapp.com"
});
export default instance;