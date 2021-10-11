import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FilterListIcon from '@mui/icons-material/FilterList';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export const mainListItems = () => (
  <div>
    <ListItem button>
      <ListItemIcon>
        <strong>10</strong>
      </ListItemIcon>
      <ListItemText primary="Top 10" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <strong>50</strong>
      </ListItemIcon>
      <ListItemText primary="Top 50" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <strong>100</strong>
      </ListItemIcon>
      <ListItemText primary="Top 100" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <strong>250</strong>
      </ListItemIcon>
      <ListItemText primary="Top 250" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <strong>500</strong>
      </ListItemIcon>
      <ListItemText primary="Top 500" />
    </ListItem>
  </div>
);

export const secondaryListItems = () => (
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
          // value={age}
          label="orderBy"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FilterListIcon />
      </ListItemIcon>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          // value={age}
          label="Country"
          // onChange={handleChange}
        >
          <MenuItem value={10}>India</MenuItem>
          <MenuItem value={20}>Japan</MenuItem>
          <MenuItem value={30}>US</MenuItem>
        </Select>
      </FormControl>
    </ListItem>
  </div>
);
