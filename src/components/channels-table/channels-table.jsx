import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CircularProgress, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ChannelsTableWrapper } from './styled';
import Title from '../dashboard/Title';
import channelIdService from '../../services/chanelIdService';
import getChannelStats from '../../services/channelStatService';
import { getCountryName } from '../../util/countryName';
import { channelTableContent } from '../../util/data';

const titleMap = {
  videoCount: 'Most Videos',
  viewCount: 'Most Views',
  rating: 'Best Rating',
};

const columns = [
  {
    field: 'name',
    headerName: 'Youtube Channel Name',
    flex: 3,
    minWidth: 200,
  },
  {
    field: 'viewCount',
    headerName: 'Youtube Views Count',
    flex: 3,
    minWidth: 100,
  },
  {
    field: 'videoCount',
    headerName: 'Youtube Videos Count',
    flex: 3,
    minWidth: 100,
  },
  {
    field: 'subscriberCount',
    headerName: 'Youtube Subscribers Count',
    flex: 3,
    minWidth: 100,
  },
  {
    field: 'country',
    headerName: 'Country',
    flex: 3,
    type: String,
    minWidth: 200,
    valueGetter: (params) => getCountryName(params.row.country),
  },
];

const ChannelsTable = ({ numberOfChannels, setChannelName, order, country }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div style={{ height: '90px', background: 'grey' }}></div>
      <Title variant="h4">{channelTableContent.top.heading}</Title>
      <Typography variant="body2">{channelTableContent.top.description}</Typography>
      <br></br>
      <Title variant="h4">
        Top {numberOfChannels} Youtube Channels with {titleMap[order]}
      </Title>
      {loaded ? (
        <DataGrid
          rows={rows.slice(0, numberOfChannels)}
          columns={columns}
          pagination
          rowsPerPageOptions={[10, 50, 100]}
          disableSelectionOnClick
          onRowClick={(params) => {
            history.push(`/youtube-channels-most-subscribers/youtube-channel/${params.row.name}`);
            setChannelName(params.row);
            localStorage.setItem('channel', JSON.stringify(params.row));
          }}
          onRowEnter={() => (document.body.style.cursor = 'pointer')}
          onRowLeave={() => (document.body.style.cursor = 'default')}
        />
      ) : (
        <CircularProgress />
      )}
      <br></br>
      <Title variant="h4">{channelTableContent.bottom.heading}</Title>
      <Typography variant="body2">{channelTableContent.bottom.description}</Typography>
      <br></br>
      <div style={{ height: '90px', background: 'grey' }}></div>
      <br></br>
    </ChannelsTableWrapper>
  );
};

export default ChannelsTable;
