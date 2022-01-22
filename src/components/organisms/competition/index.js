import { Page } from "components/wrappers";
import { Box, Grid, Typography, useTheme, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Competition(){
    const theme = useTheme()
    return(
        <Page sx={{minHeight: '0px'}}>
            {/* <Box sx={{position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <img src='/seal-bees.svg' style={{transform: 'translateY(-10%)', zIndex: 100}}/>
            </Box> */}
            <Grid container spacing={{lg: 4, md: 4, sm: 2, xs: 2}} sx={{ pt: 4, mb: '-80px', }} flexWrap="wrap-reverse">
                <Grid item xs={12} sm={7} md={7} lg={7} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Stack spacing={2} sx={{position:'relative', padding: '10px 10px', mt: 3}}>
                        {/* <Box sx={{position: 'absolute', top: '32px', left: 0, height: '2.7vw', minHeight: '30px', zIndex: 1, transform: 'translate(-60%,-20%)', [theme.breakpoints.down('md')]: {display: 'none'} }}>
                            <img src='/quotes.svg' style={{height: '100%', width: '100%'}}/>
                        </Box> */}
                        <Typography variant="h3" sx={{maxWidth: '600px', zIndex: 2, fontWeight: 'bold', [theme.breakpoints.up('sm')]: {textAlign: 'left !important'}}}>
                            WHAT WE ARE
                        </Typography>
                        <Typography sx={{ fontSize: '1.2rem', maxWidth: '600px', zIndex: 2, [theme.breakpoints.up('sm')]: {textAlign: 'left !important'}}}>
                            A competition that creates innovative solutions 
                            and promising entrepreneurs, through webinars,
                            educational materials, mentorship, and 
                            professional guidance.
                        </Typography>
                        <Typography sx={{fontSize: '1.2rem', maxWidth: '600px', zIndex: 2, [theme.breakpoints.up('sm')]: {textAlign: 'left !important'}}}>
                            The BEES Competition doesn’t only bring 
                            one-time innovation, but fosters talent among 
                            its
                            competitors, creating a community of uprising 
                            social entrepreneurs. BEES helps students
                            develop the necessary 21st-century skills through 
                            collaborative learning and applied
                            problem-solving.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5}>
                    <Box sx={{height: '100%', position: 'relative'}}>
                        <Box sx={{[theme.breakpoints.down('sm')]: {maxHeight: '40vh', height: '100%'}}}>
                            <Box sx={{width: '100%', height: '100%', visibility: 'hidden', alignItems: 'center', display: 'flex', justifyContent: 'center', [theme.breakpoints.down('sm')]: {visibility: 'visible'}}}>
                                <img src='/ideas-small.svg' style={{width: '90%', height: '90%'}}/>
                            </Box>
                            <Box sx={{width: '100%', height: '100%', visibility: 'visible', [theme.breakpoints.down('sm')]: {visibility: 'hidden'}}}>
                                <img src='/ideas.svg' style={{position: 'absolute', width: '153.8%', height: '100%', top: 0, left: 0, transform: 'translate(-27.36%, -2.6%)'}}/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', mt: '40px', [theme.breakpoints.down('sm')]: {width: '100%'}}}>
                        <img src='/comp.svg' style={{width: '60%', height: '70%', maxWidth: '403px'}}/>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{mb: 0, mt: 0, width: '100vw', alignSelf: 'center'}}>
                <img src='/curve.svg' style={{width: '100%', transform: 'translateY(8px)'}}/>
            </Box>
        </Page>
    )
}