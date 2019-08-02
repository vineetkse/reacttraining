import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f56bccb924f0ddaa09b14ca4dc04ca1e7eee6bade78d22ea6a5fa9409665d284'
    }
});