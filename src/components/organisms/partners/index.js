import { Typography, Box, Grid, Stack, Button, useTheme} from '@mui/material';
import { Page } from 'components/wrappers';

const sponsors = [1,2,3,4]

function Partners(props) {
    const theme = useTheme()
    return (
        <Page>
            <Box sx={{padding: '40px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant='h1' fontWeight={'bold'}>
                    Partners 2021
                </Typography>
            </Box>
            <Grid container sx={{pb: '40px'}} spacing={6}>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Stack spacing={2} sx={{alignItems: 'center', height: '100%'}}>
                        {sponsors.map(sponsor => {
                            return(
                                <Box sx={{width: '100%', height: '100%'}}>
                                    <img src={`/sponsor-${sponsor}.png`} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                                </Box>
                            )
                        })}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={8}>
                    <Box sx={{position: 'relative', [theme.breakpoints.up('lg')] : {padding: '0px 40px'} }}>
                        <Stack spacing={2} sx={{display:'flex', alignItems: 'center', justifyContent: 'center', pb: '20px'}}>
                            <Typography variant='h3'>
                                Become a <b>Sponsor</b>
                            </Typography>
                            <Typography variant='h6'>
                                BEES Global is a social enterprise that
                                promotes dynamic and innovative learning
                                with a focus on Business, Economics,
                                Entrepreneurship and Sustainability.
                            </Typography>
                        </Stack>
                        <Box sx={{position: 'relative'}}>
                            <img src='/talking-bee.png' style={{width: '100%', height: '100%'}}/>
                            <Button variant='action light' sx={{position: 'absolute', left: 0, top: '30px', fontSize: '1.3rem'}}>
                                Bee Part of Change
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Page>
    );
}

export default Partners;