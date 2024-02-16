import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Digikala
        </Typography>
        <Button color="inherit">Category 1</Button>
        <Button color="inherit">Category 2</Button>
        <Button color="inherit">Category 3</Button>
        <Button color="inherit">Sign In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;