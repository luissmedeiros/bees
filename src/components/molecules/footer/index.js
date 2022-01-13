import { Button, Grid, Typography, Stack, useTheme, Box} from "@mui/material";
import { Seal, Social } from "components/atoms";
import Link from "next/link";

export default function Footer(){
    const theme = useTheme()
    return(
        <Box sx={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Grid container sx={{p: '30px 0px', maxWidth: '1440px', width: '100%'}} spacing={1}>
                <Grid item xs={4} sm={4} md={4} lg={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Stack sx={{alignItems: 'flex-start', display: 'flex', justifyContent: 'center', width: '100%', marginLeft: '70px', [theme.breakpoints.down('md')]: {marginLeft: '30px'}}}>
                        {/* <Button variant='text' sx={{color: '#626262'}}>
                            The Competition
                        </Button> */}

                        <Link href='/latest-news' passHref>
                            <Button variant='text' sx={{color: '#626262'}} >
                                Latest News
                            </Button>
                        </Link>

                        <Link href='/be-a-partner' passHref>
                            <Button variant='text' sx={{color: '#626262'}} >
                                Be a Partner
                            </Button>                        
                        </Link>

                        <Link href='/about-us' passHref>
                            <Button variant='text' sx={{color: '#626262'}} href='/about-us'>
                                About Us
                            </Button>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Stack spacing={1}>
                        <Seal color={theme.palette.primary.main} width='auto' height='128'/>
                        <Typography color='#626262' fontSize={'12px'}>
                            All rights reserved by BEES Global
                        </Typography>
                    </Stack>
                </Grid> 
                <Grid item xs={4} sm={4} md={4} lg={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Social direction={{xs: 'column', sm: 'row', md: 'row', lg: 'row'}}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}