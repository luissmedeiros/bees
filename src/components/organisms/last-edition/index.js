import { Page } from 'components/wrappers'
import { Stack, Typography, Grid, Button, Box, useTheme, Divider } from '@mui/material'
import { HexagonRounded } from '@mui/icons-material';
import Link from 'next/link';

function LastEdition(props) {
    const theme = useTheme()
    return (
    <>
        <Page>
            <Grid container spacing={2} sx={{p: '80px 0px', pb: '240px'}} flexWrap={'wrap-reverse'}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Stack spacing={1} sx={{display: 'flex'}}>
                        <Typography variant='h3' sx={{maxWidth: '512px', textTransform: 'uppercase', fontWeight: 'bold'}}>
                            Last Edition
                        </Typography>
                        <Typography variant='h4' sx={{[theme.breakpoints.down('md')]: {textAlign: 'center', alignSelf: 'center'}}}>
                            The BEES Competition 2021 Edition was held globally and aimed at students from ages 14 to 20
                            Countries - Brazil, USA, India, Italy, Paraguay, China, Thailand, Russia, Viet Nam
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', [theme.breakpoints.down('md')]: {marginBottom: '20px'}, height: '100%'}}>
                        <img src="/map-alt.svg" style={{maxWidth: '100%', maxHeight: '100%'}}/>
                    </Box>
                </Grid>
            </Grid>
        </Page>
        <Page bgColor={theme.palette.dark.main}>
            <Grid container spacing={2} sx={{transform: 'translateY(-50%)', [theme.breakpoints.down('sm')]: {transform: 'translateY(-160px)'}}}>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <Box sx={{backgroundColor: theme.palette.primary.main, display:'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', height: '100%', pb: '20px'}}>
                        <img src='/175-participants.svg' style={{ width: "80%", height: '100%'}}/>
                    </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <Box sx={{backgroundColor: theme.palette.primary.main, display:'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', height: '100%', pb: '20px'}}>
                        <img src='/80-schools.svg' style={{ width: "80%", height: '100%'}}/>
                    </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <Box sx={{backgroundColor: theme.palette.primary.main, display:'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', height: '100%', pb: '20px'}}>
                        <img src='/20-br-states.svg' style={{ width: "80%", height: '100%'}}/>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{mb: '80px'}}>
                    <Grid item md={4} lg={4} sm={12} xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <Box sx={{height:'100%', width: '100%', alignSelf: 'center', maxWidth: '445px'}}>
                            <img src='/2021-themes.svg' style={{width: '100%', height: '100%'}}/>
                        </Box>
                    </Grid>
                    <Grid item md={8} lg={8} sm={12} xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Stack spacing={2} color='white'>
                            <Box style={{display: 'flex', flexDirection: 'row'}}>
                                <HexagonRounded sx={{color: theme.palette.primary.main, marginRight: '8px'}}/>
                                <Typography sx={{textAlign: 'left !important', fontSize: '1.3rem'}}>
                                    Conventional proteins and environmental impact
                                </Typography>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'row'}}>
                                <HexagonRounded sx={{color: theme.palette.primary.main, marginRight: '8px'}}/>
                                <Typography sx={{textAlign: 'left !important', fontSize: '1.3rem'}}>
                                    Cryptocurrencies and the energy crisis
                                </Typography>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'row'}}>
                                <HexagonRounded sx={{color: theme.palette.primary.main, marginRight: '8px'}}/>
                                <Typography sx={{textAlign: 'left !important', fontSize: '1.3rem'}}>
                                    Gender Inequality in corporations and negative implications
                                </Typography>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'row'}}>
                                <HexagonRounded sx={{color: theme.palette.primary.main, marginRight: '8px'}}/>
                                <Typography sx={{textAlign: 'left !important', fontSize: '1.3rem'}}>
                                    Fashion and waste of hydric resources
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
        </Page>
    </>
    );
}

export default LastEdition;