import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { GlobalStyles } from '@mui/material';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

const containerStyles = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    paddingX: 2,
    paddingY: 4,
};

const footerStyles = {
    p: 2,
    mt: 'auto',
    backgroundColor: '#f1f1f1',
};

const globalStyles = {
    body: {
        margin: 0,
        minHeight: '100vh',
        width: '100%',
    },
};

const LayoutApp: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <GlobalStyles styles={globalStyles} />
            <Header />
            <Container sx={containerStyles}>
                {children}
            </Container>
            <Box component="footer" sx={footerStyles}>
                <Typography variant="body1" align="center">
                    © 2023 My Application
                </Typography>
            </Box>
        </Box>
    );
};

export default LayoutApp;
