
import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue-demos-a9533-default-rtdb.firebaseio.com'
})

export default journalApi


