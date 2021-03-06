import { Page } from "components/wrappers";
import { Box, Grid, Typography, useTheme, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Summary(){
    const theme = useTheme()
    return(
        <Page sx={{minHeight: '0px'}}>
            {/* <Box sx={{position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <img src='/seal-bees.svg' style={{transform: 'translateY(-10%)', zIndex: 100}}/>
            </Box> */}
            <Grid container spacing={1} sx={{ pt: 4, pb: 8, }} flexWrap="wrap-reverse">
                <Grid item xs={12} sm={7} md={7} lg={7} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Stack spacing={{sm: 3, xs: 3, md: 4, lg: 5}} sx={{position:'relative', padding: '0px 10px'}}>
                        <Box sx={{position: 'absolute', top: '32px', left: 0, height: '2.7vw', minHeight: '30px', zIndex: 1, transform: 'translate(-60%,-20%)', [theme.breakpoints.down('md')]: {display: 'none'} }}>
                            <img src='/quotes.svg' style={{height: '100%', width: '100%'}}/>
                        </Box>
                        <Typography variant='h1' sx={{fontSize: '2.7vw', maxWidth: '672px', zIndex: 2, [theme.breakpoints.down('sm')]: {fontSize: '1.4rem'}, [theme.breakpoints.up('sm')]: {textAlign: 'left !important'}}}>
                        We are a social enterprise that promotes dynamic and innovative learning with a focus
                        on <b>Business</b>, <b>Economics</b>, <b>Entrepreneurship</b>, and <b>Sustainability</b>
                        </Typography>
                        <Link href='/about-us' passHref>
                            <Button variant='action light' sx={{[theme.breakpoints.down('md')]: {alignSelf: 'center'}}}>
                                Know More About Us
                            </Button>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5}>
                    <Box sx={{height: '100%', position: 'relative'}}>
                        <Box sx={{[theme.breakpoints.down('sm')]: {maxHeight: '40vh', height: '100%'}}}>
                            <Box sx={{width: '100%', height: '100%', visibility: 'hidden', [theme.breakpoints.down('sm')]: {visibility: 'visible'}}}>
                                <img src='/main-small.svg' style={{width: '100%', height: '100%'}}/>
                            </Box>
                            <Box sx={{width: '100%', height: '100%', visibility: 'visible', [theme.breakpoints.down('sm')]: {visibility: 'hidden'}}}>
                                <img src='/main-svg.svg' style={{position: 'absolute', width: '153.8%', height: '100%', top: 0, left: 0, transform: 'translate(-27.36%, -2.6%)'}}/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Page>
    )
}