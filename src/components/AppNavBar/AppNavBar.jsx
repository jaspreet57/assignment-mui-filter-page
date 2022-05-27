import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import Logo from '../../assets/images/logo.svg';
import { Search, SearchIconWrapper, StyledInputBase } from './AppNavBar.styles';

function AppNavBar() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Box
          component="img"
          sx={{
            height: 18,
            marginBottom: '5px',
            marginRight: '13px'
          }}
          alt="HouseBoon Logo"
          src={Logo}
        />
        <Typography variant="h6" component="div" color="inherit" sx={{ marginRight: '30px' }}>
          HouseBoon
        </Typography>
        <Box sx={{ minWidth: 80 }}>
          <FormControl fullWidth variant='standard'>
            <Select
              id="services-select"
              disableUnderline
              defaultValue="none"
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) => {
                if (selected === "none") {
                  return <Typography color="GrayText">Services</Typography>;
                }

                return selected;
              }}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="one">One</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Search>
          <SearchIconWrapper>
            <IconButton aria-label="search" sx={{ background: "#4F46E5", '&:hover': { background: "#4f46e5de" } }} >
              <SearchIcon sx={{ color: 'white', fontSize: '15px' }} />
            </IconButton>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}

          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Typography color="GrayText">
          Check Tenancy Socre
        </Typography>
        <Box sx={{ width: 150, marginLeft: '10px', marginRight: '10px' }}>
          <TextField id="outlined-basic" label="List Your Place" variant="outlined" size="small" />
        </Box>
        <Box sx={{ display: { xs: 'flex' } }}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            // aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppNavBar;
