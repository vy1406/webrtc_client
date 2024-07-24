import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@utils/constants';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My App
                </Typography>
                {Object.entries(ROUTES).map(([key, path]) => (
                    <Button
                        key={path}
                        color="inherit"
                        onClick={() => handleNavigation(path)}
                    >
                        {key.replace('_', ' ')}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
