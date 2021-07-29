import axios from 'axios';

const instance = axios.create({
    //uncomment for local use
   // baseURL:'http://localhost:5001/clone-ea13e/us-central1/api'

   //for server use
    baseURL:'https://us-central1-clone-ea13e.cloudfunctions.net/api'
});

export default instance;