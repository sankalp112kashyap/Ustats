import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CircularProgress, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ChannelsTableWrapper } from './styled';
import Title from '../dashboard/Title';
import channelIdService from '../../services/chanelIdService';
import getChannelStats from '../../services/channelStatService';
import { getCountryName } from '../../util/countryName';

const columns = [
  {
    field: 'name',
    headerName: 'Channel Name',
    flex: 3,
  },
  {
    field: 'viewCount',
    headerName: 'View Count',
    flex: 3,
  },
  {
    field: 'videoCount',
    headerName: 'Video Count',
    flex: 3,
  },
  {
    field: 'subscriberCount',
    headerName: 'Subscriber Count',
    flex: 3,
  },
  {
    field: 'country',
    headerName: 'Country',
    flex: 3,
    type: String,
    valueGetter: (params) => getCountryName(params.row.country),
  },
];

const ChannelsTable = ({ numberOfChannels, setChannelName, order, country }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const history = useHistory();

  useEffect(async () => {
    const { items } = await channelIdService.getChannelIds(null, country, order);
    const ids = items.map((key) => key.snippet.channelId);
    const response = await getChannelStats(ids.join());
    setLoaded(true);
    const mappedResponse = response.map((key, id) => ({
      name: key.snippet.title,
      country: key.snippet.country,
      thumbnails: key.snippet.thumbnails.high.url,
      viewCount: parseInt(key.statistics.viewCount, 10),
      subscriberCount: parseInt(key.statistics.subscriberCount, 10),
      videoCount: parseInt(key.statistics.videoCount, 10),
      id: id + 1,
      channelId: ids[id],
      description: key.snippet.description,
    }));
    mappedResponse.sort((a, b) => b[order] - b[order]);
    setRows(mappedResponse);
  }, [country, order]);
  return (
    <ChannelsTableWrapper>
      <Title variant="h4"> Top {numberOfChannels} Channels </Title>
      {loaded ? (
        <DataGrid
          rows={rows.slice(0, numberOfChannels)}
          columns={columns}
          pagination
          rowsPerPageOptions={[10, 50, 100]}
          disableSelectionOnClick
          onRowClick={(params) => {
            history.push('channel');
            setChannelName(params.row);
            localStorage.setItem('channel', JSON.stringify(params.row));
          }}
        />
      ) : (
        <CircularProgress />
      )}
    </ChannelsTableWrapper>
  );
};

export default ChannelsTable;
