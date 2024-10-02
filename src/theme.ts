import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
    palette: {
        primary: {
            main: '#2980B9',
        },
        secondary: {
            main: '#333333',
        },
        text: {
            primary: '#333333'
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    color: '#000',
                    boxShadow: 'none',
                    borderBottom: '1px solid #000',
                    paddingLeft: 0,
                    paddingRight: 0
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#333',
                    textDecoration: 'none',
                    '&:hover': {
                        color: '#2980B9'
                    },
                },
            },
        },

    }
});

export default theme;
