import { useTheme, Box, Grid, Typography, Stack } from "@mui/material";
import { height } from "@mui/system";
import { Page } from "components/wrappers";

function How(props) {
    const theme = useTheme()
    return (
        <Page bgColor={theme.palette.primary.main}>
            <Grid container sx={{display: 'flex', flexDirection: 'row', padding: '20px 0px'}}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Box sx={{position: 'relative', padding: '20px 0px', display: 'flex', alignItems: 'center', width: 'fit-content'}}>
                        <Box sx={{width: '100vw', position: 'absolute', right: 0, transform: 'translate(-50px,0)', height: '100%', backgroundColor: theme.palette.dark.main, zIndex: 1}}/>
                        <img src='/how-steps.png' style={{width: '100%', height: '100%', maxWidth: '763px', zIndex: 2, position: 'relative'}}/>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={4} lg={4}>
                    <Box sx={{flex: 1, marginLeft: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%', pb: '20px', [theme.breakpoints.down('md')]: {marginTop: '10px'}}}>
                        <Stack spacing={2}>
                            <Typography variant='h3' sx={{fontWeight: 'bold'}}>
                                How?
                            </Typography>
                            <Typography>
                            Individuals must act together to solve 
                            contemporary world issues. <b> We base 
                            our cases on the
                            United Nations 
                            Sustainable Development Goals. </b>
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Page>
    );
}

export default How;