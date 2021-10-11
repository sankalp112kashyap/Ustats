import axios from 'axios';
import { API_KEY } from '../util/apiKey';

const baseURL = `https://youtube.googleapis.com/youtube/v3`;

const getChannelStats = async (arr) => {
  const params = new URLSearchParams();
  params.append('part', 'statistics');
  params.append('part', 'snippet');
  params.append('id', arr);
  params.append('key', API_KEY);

  const request = {
    params,
  };

  try {
    const response = await axios.get(`${baseURL}/channels`, request);
    return response.data.items;
  } catch (err) {
    return [];
  }
};

export default getChannelStats;
