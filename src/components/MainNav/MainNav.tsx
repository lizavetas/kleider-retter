import React from 'react';
import {Link, Stack} from '@mui/material';
import {Link as RouterLink, useLocation} from 'react-router-dom';

const LINKS = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/about',
        name: 'Über uns'
    },
    {
        path: '/donation',
        name: 'Kleidung spenden'
    },
    {
        path: '/contact',
        name: 'Kontakt'
    }
];

const MainNav: React.FC = () => {
    const location = useLocation();

    return (
        <Stack gap="16px" direction="row">
            {
                LINKS.map(link => {
                    const isActive = location.pathname ===  link.path;

                    return (
                        <Link component={RouterLink}
                              to={link.path}
                              key={link.name}
                              sx={{
                                  color: isActive ? 'primary.main' : 'text.primary'
                              }}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }
        </Stack>
    )
};

export default MainNav;
