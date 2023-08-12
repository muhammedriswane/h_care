import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Drawer, FormControl, MenuItem, Select ,InputLabel, Button,ClickAwayListener } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom'
import ViewListIcon from '@mui/icons-material/ViewList';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const StyledAppbar = styled(AppBar)(({ theme }) => ({
    backgroundColor:'#a5aced', // Apply primary color from the palette
  }));

  const TransparentDrawer = styled(Drawer)(({ theme, open}) => ({
    // Set the background to transparent when the drawer is open, otherwise, use the original background color
    '& .MuiDrawer-paper': {
      background: 'rgba(255, 255, 255, 0.8)', // Change this to the desired background color
    },
    // Set the backdrop background to transparent when the drawer is open, otherwise, use the original backdrop background color
    ...(open
      ? {
          '& .MuiBackdrop-root': {
            backgroundColor: 'transparent',
          },
        }
      : {
          '& .MuiBackdrop-root': {
            display: 'none',
          },
        }),
  }));

  
  

export default function SearchAppBar() {

  const navigate=useNavigate()

    const [DrawerOpen,setDrawerOpen]=useState(false)
    const handleOpenDrawer=()=>{
        setDrawerOpen(true)
    }
    const closedDrawer=()=>{
        setDrawerOpen(false)
    }
    const handleClickAway = () => {
      if (DrawerOpen) {
        closedDrawer();
      }
    };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>

    <Box sx={{ flexGrow: 1 }}>
      <StyledAppbar position="static" color='inherit'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            className='button_ouline'
          onClick={handleOpenDrawer}>
            <ViewListIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            KRITHIKA HOSPITAL
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </StyledAppbar>
      <TransparentDrawer anchor="left" open={DrawerOpen}  >
        <div className='Drawer'>
          {/* Put your drawer content here */}
          {/* For example, you can show navigation links or other components */}
          <div className='d-flex' style={{justifyContent:'end',margin:'5px'}}>
          
          <IconButton onClick={closedDrawer} className='iconbtn' >
            <CloseIcon/>
          </IconButton>
          </div>
          {/* <Typography variant="h6" sx={{ p: 2 }}>
            Home exit
          </Typography> */}
          <List>
          <ListItem button onClick={()=>{navigate('dashboard')}}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={()=>{navigate('profile')}}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={()=>{navigate('pharmacy')}}>
            <ListItemText primary="Pharmacy" />
          </ListItem>
          <ListItem button>
            <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Patients</InputLabel>
                <Select
                  labelId="patient-select-label"
                  id="patient-select"
                  value={''} // You can set the selected value here
                  label="Patients"
                >
                  
                  <MenuItem >Add Patients</MenuItem>
                  <MenuItem >Patient Record</MenuItem>
                  <MenuItem >Add Users</MenuItem>
                  {/* Add more patients as needed */}
                </Select>
              </FormControl>
          </ListItem>
          <ListItem button>
            <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Lab</InputLabel>
                <Select
                  labelId="patient-select-label"
                  id="patient-select"
                  value={''} // You can set the selected value here
                  label="Patients"
                >
                  
                  <MenuItem ></MenuItem>
                  <MenuItem >Results</MenuItem>
                  <MenuItem >Add Services</MenuItem>
                  {/* Add more patients as needed */}
                </Select>
              </FormControl>
          </ListItem>
          <ListItem button>
            <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Set Up</InputLabel>
                <Select
                  labelId="patient-select-label"
                  id="patient-select"
                  value={''} // You can set the selected value here
                  label="Patients"
                >
                  
                  <MenuItem ></MenuItem>
                  <MenuItem >Add users</MenuItem>
                  <MenuItem >Data backup</MenuItem>
                  {/* Add more patients as needed */}
                </Select>
              </FormControl>

          </ListItem>
          {/* Add more list items or components as needed */}
          <ListItem>
            <Button variant='contained' endIcon={<LogoutIcon/>} style={{color:''}}>Log out</Button>
          </ListItem>
        </List>
        </div>
          </TransparentDrawer> 
          {DrawerOpen && (
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 999,
              }}
              onClick={closedDrawer}
            />
          )}
        </Box>
  
    </ClickAwayListener>

  );
}