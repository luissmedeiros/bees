import { Typography, Button, Box, Grid, useTheme, Stack } from "@mui/material";
import { Page } from "components/wrappers";

export default function Countries(){
    const theme = useTheme()
    return(
        <Page minHeight='0px' bgColor={theme.palette.primary.main}>
            <Grid container spacing={2} sx={{pb: '40px'}} wrap="reverse">
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Stack spacing={4}>
                        <Stack spacing={1} sx={{display: 'flex'}}>
                            <Typography variant='h5' sx={{fontSize: 31, maxWidth: '512px'}}>
                                Started out as a student competition, but is now open to everyone who wants to innovate
                            </Typography>
                            <Typography sx={{[theme.breakpoints.down('md')]: {textAlign: 'center', alignSelf: 'center'}}}>
                                Now open to all ages
                            </Typography>
                        </Stack>
                        <Stack sx={{width: 'fit-content'}} >
                            <Button variant='action light'>
                                Pre-Register Now
                            </Button>
                            <Button variant='link' sx={{alignSelf: 'center', color: '#28282880', '&:hover': {color: '#282828'}}}>
                                Learn More
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                        <img src="/map.svg" style={{maxWidth: '100%', maxHeight: '100%'}}/>
                    </Box>
                </Grid>
            </Grid>
        </Page>
    )
}