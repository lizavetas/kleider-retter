import {Outlet} from 'react-router-dom';
import {Box, CssBaseline} from '@mui/material';

export default function Layout() {
    return (
        <div>
            <CssBaseline/>
            {/* TODO vh- headerHeight - footerHeight*/}
            <Box sx={{minHeight: '100vh'}} component="main">
                <Outlet/>
            </Box>
        </div>
    );
}
