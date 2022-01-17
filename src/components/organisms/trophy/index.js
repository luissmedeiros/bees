import { useTheme, Grid, Box, Typography, Button, Stack } from "@mui/material"
import { Page } from "components/wrappers"
import Link from "next/link"

export default function Trophy(){
    const theme = useTheme()
    return(
        <Page BgColor={theme.palette.dark.main}>
            <Grid container sx={{pt: '40px', pb: '40px'}}>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{display: 'flex', alignItems: 'center' , justifyContent: 'flex-end', [theme.breakpoints.down('md')]: {justifyContent: 'center'} }}>
                    <Box sx={{position: 'relative', width: 'fit-content'}}>
                        <img src='/trophy.svg' height='335px' width={'377px'} style={{position: 'relative', zIndex: 3}}/>
                        <Stack sx={{position: 'absolute', height: '90%', transform: 'translate(calc(-100% + 179px),0)', justifyContent: 'space-evenly', top: 10}}>
                            {[0,1,2].map( item => <Box key={`stripe_${item}`} sx={{width: '100vw', position: 'relative', backgroundColor: '#FEA224', height: '50px', zIndex: 2}}/>)}
                        </Stack>
                    </Box>
                </Grid>
                <Grid item sx={12} sm={12} md={6} lg={6} sx={{display: 'flex', alignItems: 'center' , justifyContent: 'flex-start', [theme.breakpoints.down('md')]: {justifyContent: 'center'} }}>
                    <Stack sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography variant='h2' sx={{maxWidth: '447px'}}>
                            Now, just read our guide, 
                            register and you’re on your 
                            way to becoming the 
                            BEES
                            Champion!
                        </Typography>
                        <Box sx={{marginTop: '40px'}}>
                            <Link href='/'>
                                <Button variant='action light'>
                                    Pre-Register Now
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Page>
    )
}