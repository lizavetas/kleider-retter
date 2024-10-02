import {AppBar, Container, Toolbar, useMediaQuery, useTheme} from '@mui/material';
import {Logo} from '../Icons/Icons';
import MainNav from '../MainNav/MainNav';

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Logo/>
                    {isMobile ? <div>Drawer</div> : <MainNav/>}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
