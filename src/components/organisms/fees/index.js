import { Page } from "components/wrappers";
import { Box, Stack, Typography, useTheme, Grid, Divider } from "@mui/material";
import { HexagonRounded } from "@mui/icons-material";

export default function Fees(props){
    const theme = useTheme()
    return(
        <Page bgColor={theme.palette.dark.main}>
            <Stack spacing={4} sx={{pt: '80px', pb: '40px'}}>
                <Stack>
                    <Typography variant="h1" sx={{color: theme.palette.primary.main, fontWeight: 'bold'}}>
                        HOW TO PARTICIPATE
                    </Typography> 
                    <Typography sx={{color: 'white'}}>
                        Will be held in English
                    </Typography>
                </Stack>
                <Grid container spacing={2}>
                    <Grid item md={3} lg={3} sm={12} xs={12}>
                        <Stack sx={{color: 'white'}} spacing={2}>
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
                        <Stack spacing={2} color='white'>
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
                <Stack color='white' spacing={1}>
                    <Typography variant="h3" sx={{fontWeight: 'bold'}}>
                        Fee & Fee-Waivers
                    </Typography>
                    <Typography>
                    To participate, you will have to pay a {!props.brl ? '$8.00 USD' : 'R$ 30,00'} fee. However, if you qualify you may use fee-waivers.
                    </Typography>
                </Stack>
            </Stack>


        </Page>
    )
}