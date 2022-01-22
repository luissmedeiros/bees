import { Page } from 'components/wrappers';
import { Grid, Stack, Typography, Divider, Box, useTheme } from '@mui/material'
import { HexagonRounded } from '@mui/icons-material'
import { Card } from 'components/molecules'

const cards = [
    {
        title: 'knowledge',
        desc: `Learn about subjects in a
            pratical and engaging way`
    },
    {
        title: 'integration',
        desc: `Develop a holistic
            perspective`
    },
    {
        title: 'innovation',
        desc: `Create solutions that
            have lasting impact`
    },
    {
        title: 'awareness',
        desc: `Understand the SDGs and
            ESG importance in 
            today’s world`
    }
]

function Awards(props) {
    const theme = useTheme()
    return (
        <Page>
            <Grid container spacing={{sm: 4, xs: 4, md: 2, lg: 2}} sx={{[theme.breakpoints.up('sm')]: {paddingTop: '80px'}, padding: '40px 0px', paddingBottom: '240px'}}>
                <Grid item md={3} lg={3} sm={12} xs={12}>
                    <Stack spacing={2}>
                        <Typography variant='h3' sx={{fontWeight: 'bold', width: '100%'}}>
                            Categories
                        </Typography>
                        <Box>
                            <Typography sx={{fontWeight: 'bold', textAlign: 'left !important'}}>
                                Brood
                            </Typography>
                            <Typography sx={{textAlign: 'left !important'}}>
                                Ages 13 to 22
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{fontWeight: 'bold', textAlign: 'left !important'}}>
                                Swarm
                            </Typography>
                            <Typography sx={{textAlign: 'left !important'}}>
                                Anyone over the age of 23
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item md={2} lg={2} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', [theme.breakpoints.down('md')]: {display: 'none'}}}>
                    <Divider orientation="vertical" variant='fullWidth' sx={{backgroundColor: 'white', width: '1px'}}/>
                </Grid>
                <Grid item md={7} lg={7} sm={12} xs={12}>
                    <Stack spacing={2}>
                        <Typography variant='h3' sx={{fontWeight: 'bold'}}>
                            Team
                        </Typography>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <HexagonRounded sx={{color: theme.palette.primary.main, marginRight: '8px'}}/>
                            <Typography sx={{textAlign: 'left !important'}}>
                                Must compete in teams of 3 to 5 people
                            </Typography>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <HexagonRounded sx={{color: theme.palette.primary.main, marginRight: '8px'}}/>
                            <Typography sx={{textAlign: 'left !important'}}>
                                Must be composed of individuals in the same category
                            </Typography>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <HexagonRounded sx={{color: theme.palette.primary.main, marginRight: '8px'}}/>
                            <Typography sx={{textAlign: 'left !important'}}>
                                Individual registration is available! Our committee will 
                                pair individually registered individuals through a 
                                matching mechanism
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{width: '100vw', alignSelf: 'center', backgroundColor: theme.palette.dark.main, display: 'flex', flexDirection: 'column'}}>
                <Box sx={{maxWidth: '1440px', alignSelf: 'center', width: '100%', mt: '-160px', padding: '0px 60px', [theme.breakpoints.down('md')]: {padding: '0px 30px'}, pb: '40px'}}>
                    <Grid container spacing={3}>
                        {cards.map( item => {
                            return(
                                <Grid key={`card_${item.title}`} item xs={6} sm={6} md={3} lg={3}>
                                    <Card title={item.title} desc={item.desc}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
                <Box sx={{width:'100%', maxWidth: '1200px', alignSelf: 'center'}}>
                    <img src='/award-image.png' style={{width: '100%', height: '100%'}}/>
                </Box>
            </Box>
        </Page>
    );
}

export default Awards;