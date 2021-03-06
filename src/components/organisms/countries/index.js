import { Typography, Button, Box, Grid, useTheme, Stack } from "@mui/material";
import { Page } from "components/wrappers";
import Link from "next/link";

export default function Countries(){
    const theme = useTheme()
    return(
        <Page minHeight='0px' bgColor={theme.palette.primary.main}>
            <Grid container spacing={2} sx={{pb: '40px'}} flexWrap={'wrap-reverse'}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Stack spacing={{xs: 2, sm: 2, md: 4, lg: 4}}>
                        <Stack spacing={1} sx={{display: 'flex'}}>
                            <Typography variant='h1' sx={{maxWidth: '512px'}}>
                                Started out as a student competition, but is now open to everyone who wants to innovate
                            </Typography>
                            <Typography sx={{[theme.breakpoints.down('md')]: {textAlign: 'center', alignSelf: 'center'}}}>
                                Now open to all ages
                            </Typography>
                        </Stack>
                        <Stack sx={{width: 'fit-content'}}>
                            <Link href='/be-a-partner' passHref>
                                <Button variant='action light'>
                                    Pre-Register Now
                                </Button>
                            </Link>
                            <Link href='/about-us' passHref>
                                <Button variant='link' sx={{alignSelf: 'center', color: '#28282880', '&:hover': {color: '#282828'}}}>
                                    Learn More
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', [theme.breakpoints.down('md')]: {marginBottom: '20px'}}}>
                        <img src="/map.svg" style={{maxWidth: '100%', maxHeight: '100%'}}/>
                    </Box>
                </Grid>
            </Grid>
        </Page>
    )
}