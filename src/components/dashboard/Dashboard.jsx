import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { deepOrange, grey, red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { countries } from '../../util/countries';
import { ChannelBanner } from '../channel-banner';
import { ChannelsTable } from '../channels-table';
import ChannelInfoCard from './Deposits';
import Title from './Title';
import { getCountryName } from '../../util/countryName';

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const Navigation = ({ setNumber, mode, setMode, setOrder, setCountry, country, order }) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [inputValue, setInputValue] = React.useState('');

  const history = useHistory();
  const toggleMode = () => {
    if (mode === 'dark') setMode('light');
    else setMode('dark');
  };

  return (
    <>
      <AppBar color="primary" position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Youtube Stats
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>{' '}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <div>
            <ListItem
              button
              onClick={() => {
                setNumber(10);
                history.push('/');
              }}
            >
              <ListItemIcon>
                <strong>10</strong>
              </ListItemIcon>
              <ListItemText primary="Top 10" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setNumber(25);
                history.push('/');
              }}
            >
              <ListItemIcon>
                <strong>25</strong>
              </ListItemIcon>
              <ListItemText primary="Top 25" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setNumber(50);
                history.push('/');
              }}
            >
              <ListItemIcon>
                <strong>50</strong>
              </ListItemIcon>
              <ListItemText primary="Top 50" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setNumber(50);
                history.push('/');
              }}
            >
              <ListItemIcon>
                <strong>100</strong>
              </ListItemIcon>
              <ListItemText primary="Top 100" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setNumber(50);
                history.push('/');
              }}
            >
              <ListItemIcon>
                <strong>250</strong>
              </ListItemIcon>
              <ListItemText primary="Top 250" />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <ListSubheader inset>Filters</ListSubheader>
            <ListItem button>
              <ListItemIcon>
                <FilterListIcon />
              </ListItemIcon>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Order By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={order}
                  label="orderBy"
                  onChange={(event, value) => {
                    setOrder(value.props.value);
                  }}
                  default="videoCount"
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                >
                  <MenuItem value="viewCount">View Count</MenuItem>
                  <MenuItem value="videoCount">Video Count</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            {/* <ListItem button>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <FormControl fullWidth>
                <Autocomplete
                  options={countries}
                  value={country}
                  onChange={(event, value) => {
                    setCountry(value.id);
                  }}
                  renderInput={(params) => <TextField {...params} label="Country" />}
                />
              </FormControl>
            </ListItem> */}
          </div>
        </List>
      </Drawer>
    </>
  );
};

function DashboardContent({
  description,
  name,
  country,
  viewCount,
  subscriberCount,
  videoCount,
  thumbnails,
}) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ChannelBanner description={description} name={name} logoUrl={thumbnails} />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Title>Country</Title>
            <h3 style={{ marginTop: 0 }}>{getCountryName(country)}</h3>
            <Title>Published On</Title>
            <h3 style={{ marginTop: 0 }}>
              {}
              2005-06-22T05:12:23Z
            </h3>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              // height: 240,
            }}
          >
            <ChannelInfoCard title="Subscriber Count" value={subscriberCount} />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ChannelInfoCard title="Video Count" value={videoCount} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ChannelInfoCard title="View Count" value={viewCount} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Dashboard(props) {
  const [number, setNumber] = React.useState(10);
  const [mode, setMode] = React.useState('light');
  const [channelName, setChannelName] = React.useState(JSON.parse(localStorage.getItem('channel')));
  const [order, setOrder] = React.useState('videoCount');
  const [country, setCountry] = React.useState('IN');
  const mdTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: red,
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[200],
            background: {
              default: grey[800],
              paper: grey[800],
            },
            text: {
              primary: '#fff',
              secondary: grey[200],
            },
          }),
    },
  });

  return (
    <>
      <Router>
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navigation
              setNumber={setNumber}
              setMode={setMode}
              mode={mode}
              setOrder={setOrder}
              setCountry={setCountry}
              order={order}
              country={country}
            />
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <Toolbar />

              <Switch>
                <Route exact path="/">
                  <ChannelsTable
                    order={order}
                    country={country}
                    setChannelName={setChannelName}
                    numberOfChannels={number}
                  />
                </Route>
                <Route exact path="/channel">
                  {channelName && <DashboardContent {...channelName} />}
                </Route>
              </Switch>
            </Box>
          </Box>
        </ThemeProvider>
      </Router>
    </>
  );
}
