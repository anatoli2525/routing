import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
           
        <AppBar position="static">
            <Toolbar>
                <Button component={RouterLink} to="/" color="inherit">
                    <Typography variant="h8">Breed List</Typography>
                </Button>
                <Button component={RouterLink} to="/randomDogImage" color="inherit">
                    <Typography variant="h8">Random Dog Image</Typography>
                </Button>
            </Toolbar>
        </AppBar>
    
       
    );
};

export default Header;
