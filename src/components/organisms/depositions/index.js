import { Typography, useTheme, Box, Stack, Grid } from '@mui/material';
import { Carousel } from 'components/molecules';
import { Page } from 'components/wrappers'
import { depositions } from 'settings';

function Deposition(props) {
    const theme = useTheme()
    return (
        <Page minHeight="0vh" bgColor={theme.palette.primary.main}>
            <Box sx={{backgroundColor: theme.palette.dark.main, pt: 0, pb: 12, position: 'relative'}}>
                <Box sx={{width: '100vw', position: 'absolute', left: '50%', backgroundColor: theme.palette.dark.main, height: '100%', top: 0, zIndex: 1, transform: 'translate(-50%,0)'}}/>
                <Typography variant='h4' color={'#fff'} sx={{zIndex: 2, position: 'relative', [theme.breakpoints.down('md')]: {fontSize: '24px'}}}>
                    What some participants have to say about the last BEES Competition
                </Typography>
            </Box>
            <Box sx={{position: 'relative', zIndex: 3}}>
                <Carousel sx={{transform: 'translatey(-100px)'}} depositions={depositions}/>
            </Box>
        </Page>
    );
}

export default Deposition;