import {Outlet} from 'react-router-dom';
import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import theme from '../../../theme';

export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {/* TODO vh- headerHeight - footerHeight*/}
            <Box sx={{minHeight: '100vh'}} component="main">
                <Outlet/>
            </Box>
        </ThemeProvider>
    );
}
