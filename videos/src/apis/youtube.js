import axios from 'axios';
const KEY = 'AIzaSyCWvF05ksQOsCPr8B3-yBvD9hm7SNOcO5M';

export  default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});