import { Page } from "components/wrappers";
import { Box, Grid, Typography, useTheme, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Summary(){
    const theme = useTheme()
    return(
        <Page sx={{[theme.breakpoints.down('lg')]: {minHeight: '0px'}}}>
            <Box sx={{position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', [theme.breakpoints.down('lg')]: {display: 'none'} }}>
                <img src='/seal-bees.svg' style={{transform: 'translateY(-10%)', zIndex: 100}}/>
            </Box>
            <Box sx={{position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', pb: '20px', [theme.breakpoints.down('lg')]: {display: 'none'} }}>
                <img src='/quotes.svg' style={{position: 'absolute', top: 0, left: 0, height: '42px', zIndex: 1}}/>
                <Typography variant='h1' sx={{maxWidth: '672px', fontSize: '39px', zIndex: 3, mt: '20px', ml: '35px'}}>
                    We are a social enterprise that promotes dynamic and innovative learning with a focus
                    on <b>Business</b>, <b>Economics</b>, <b>Entrepreneurship</b>, and <b>Sustainability</b>
                </Typography>
                <img src='/main-svg.svg' style={{position: 'absolute', right: 0, top: 0, zIndex: 1}}/>
            </Box>
            <Grid container spacing={1} sx={{ pt: 4, pb: 4, [theme.breakpoints.up('lg')]: {display: 'none'}}} flexWrap="wrap-reverse">
                <Grid item xs={12} sm={7} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Stack spacing={2} sx={{}}>
                        <Typography sx={{fontSize: '1.2rem'}}>
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
                <Grid item xs={12} sm={5}>
                    <Box>
                        <img src='/main-small.svg' style={{width: '100%'}}/>
                    </Box>
                </Grid>
            </Grid>
        </Page>
    )
}