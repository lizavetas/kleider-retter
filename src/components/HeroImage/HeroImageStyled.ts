import {styled} from '@mui/material/styles';
import {Box, Typography} from '@mui/material';

// Styled components
export const HeroImageStyled = styled(Box)(({theme}) => ({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '76vh', // Default for large screens
    [theme.breakpoints.down('md')]: {
        height: '65vh',
    },
    [theme.breakpoints.down('sm')]: {
        height: '50vh',
    },
}));

export const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

export const Heading = styled(Box)(({theme}) => ({
    position: 'relative',
    color: theme.palette.text.primary,
    maxWidth: '600px',
    padding: '20px 20px 26px 16px',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    [theme.breakpoints.down('sm')]: {
        left: '5%',
        maxWidth: '90%',
    },
}));

export const Description = styled(Typography)(({theme}) => ({
    marginBottom: theme.spacing(4),
}));

export const ButtonsContainer = styled(Box)({
    display: 'flex',
    gap: '20px',
});
