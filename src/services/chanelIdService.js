import axios from 'axios';
import { API_KEY } from '../util/apiKey';

const baseURL = `https://youtube.googleapis.com/youtube/v3`;

const getChannelIds = async (nextPageToken, country, order) => {
  const params = new URLSearchParams();
  params.append('part', 'snippet');
  params.append('maxResults', '50');
  params.append('order', order);
  params.append('channelType', 'any');
  params.append('key', API_KEY);
  params.append('type', 'channel');
  if (country) params.append('regionCode', country);
  if (nextPageToken) {
    params.append('nextPageToken', nextPageToken);
  }

  const request = {
    params,
  };

  try {
    const response = await axios.get(`${baseURL}/search`, request);
    return { items: response.data.items, nextPageToken: response.data.nextPageToken };
  } catch (err) {
    return [];
  }
};

const channelIdService = { getChannelIds };

export default channelIdService;
