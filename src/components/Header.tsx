import React, { useContext, useState } from 'react';
import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { ROUTES } from '../router/routePaths';
import { SignInForm } from './signInForm';
import { CustomModal } from './CustomModal';

interface ISignInForm {
    login: string;
    password: string;
}
const headerBoxStyle= {
	flexGrow: 1,
	display: 'flex',
	alignItems:
	'center',
	justifyContent: 'flex-start'
}

const Header: React.FC = () => {
    const { authenticated, setAuthenticated, setUserName, userName } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const location = useLocation();
	const navigate = useNavigate();

    const handleLogout = () => {
        setAuthenticated(false);
        setUserName('');
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit: SubmitHandler<ISignInForm> = data => {
        setAuthenticated(true);
        setUserName(data.login);
        handleClose();
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
					<Box sx={headerBoxStyle}>
						<Typography variant="h6">
							{ authenticated ? ` Hi ${userName}` : 'Application' }
						</Typography>
                        {location.pathname !== ROUTES.HOME && (
                            <Button color="inherit" sx={{ marginLeft: 3 }} onClick={() => navigate(ROUTES.HOME)}>
                                Home
                            </Button>
                        )}
					</Box>
                    {authenticated && (
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                    {!authenticated && (
                        <Button color="inherit" onClick={handleOpen}>
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
            <CustomModal open={open} handleClose={handleClose} title="Login">
                <SignInForm onSubmit={onSubmit} handleClose={handleClose} />
            </CustomModal>
        </>
    );
};

export default Header;
