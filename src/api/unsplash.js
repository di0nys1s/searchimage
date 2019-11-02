import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
    Authorization:
      'Client-ID 74bb76c3f0cee4a4aaeb867b27a7b8b22d0e7b9c054d4c8f27bcd5a5313a0f81'
  }
});