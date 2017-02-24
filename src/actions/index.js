import axios from 'axios';

const URL="https://www.googleapis.com/youtube/v3/search"
const KEY = '<%API_Key%>';

export default function searchData(term){
    
    const params ={
        part : 'snippet',
        q:term,
        key : KEY,
        type : 'video'
    }

    const request = axios.get(URL,{params : params});

    return {
        type : 'result',
        payload : request
    }
}