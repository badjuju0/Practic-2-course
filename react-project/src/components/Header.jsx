import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Home from '../Social';
import {Link} from "react-router-dom";
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';
const Header = () => (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" color = "secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FactCheckTwoToneIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='inherit'>
              <Link to = "/" className='W'>Мы генерируем для вас рандомную шнягу!</Link>
            </Typography>
            <Link to = "/Social" className='W'>Socials </Link>
          </Toolbar>
        </AppBar>
      </Box>
   </div>
   )

   export default Header;