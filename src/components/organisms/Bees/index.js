import { Grid, Typography, Box, Divider, Stack } from "@mui/material";
import { useTheme } from "@mui/system";
import { Logo } from "components/atoms";
import { Page } from "components/wrappers";


function Bees(props) {

    const theme = useTheme()

    return (
        <Page bgColor={theme.palette.dark.main}>
            <Stack spacing={5}>
                <Grid container sx={{pt: '60px'}} spacing={2}>
                    <Grid item md={4} lg={4} xs={12} sm={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Box>
                            <Logo color={theme.palette.primary.main} height={'126'}/>
                        </Box>
                    </Grid>
                    <Grid item md={2} lg={2} sx={{display: 'flex', flexDirection: 'column', [theme.breakpoints.down('sm')]: {display: 'none'}}}>
                        <Divider orientation="vertical" sx={{backgroundColor: '#626262', maxWidth: '2px', alignSelf: 'center'}}/>
                    </Grid>
                    <Grid item md={6} lg={6} xs={12} sm={12}>
                        <Box sx={{width: '100%'}}>
                            <Typography sx={{fontSize: '29px', maxWidth: '100%', [theme.breakpoints.down('md')]: {fontSize: '21px'}}} color={'#fff'}>
                            Our name is an abbreviation of 
                            <b> Business</b>, <b>Economics</b>, <b>Entrepreneurship</b>, and <b>Sustainability</b>,
                            subjects we find to 
                            be vital to the understanding of 
                            today’s society.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Stack spacing={4} sx={{pb: '40px'}}>
                    <Box sx={{position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Typography sx={{color: 'white', fontSize: '24px', fontFamily: 'Roboto', [theme.breakpoints.down('md')]: {fontSize: '16px', textAlign: 'left !important'}}}>
                        However, our name also represents our values: bees are fundamental to the environment 
                        but are currently endangered, showing the importance of a sustainable focus. They are also some
                        of the most ingenious living beings to exist, working together to make sure their home is
                        fully-functional and creating innovative solutions.
                        </Typography>
                        <img src='/bee.png' style={{position: 'relative', maxWidth: '40%'}}/>
                    </Box>
                    <Typography sx={{color: 'white', fontSize: '24px', fontFamily: 'Roboto', [theme.breakpoints.down('md')]: {fontSize: '16px', textAlign: 'left !important'}}}>
                    Similarly, we aim to encourage sustainable innovation and entrepreneurship through
                    collaboration, creating an environment that fosters solutions for our world's current issues.
                    </Typography>
                </Stack>
            </Stack>
        </Page>
    );
}

export default Bees;