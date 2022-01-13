import { Box, Stack, Grid, Divider, Typography, Button, useTheme } from "@mui/material"
import { Page } from "components/wrappers"
import ReactPlayer from "react-player"
import styles from './discover.module.css'

export default function Discover(){
    const theme = useTheme()
    return(
        <Page bgColor='#282828' minHeight='70vh'>
            <Box sx={{pt: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <img src='discover-bees.svg'/>
                <Box sx={{position: "absolute", right: 60, top: 75, [theme.breakpoints.down('md')]: {display: 'none'}}}>
                    <img src='seal-white-bees.svg'/>
                </Box>
            </Box>
            <Grid container sx={{minHeight: 'fit-content', pt: '60px', pb: '60px'}} spacing={2}>
                <Grid item sx={{position: 'relative', alignItems: 'center', display: 'flex', justifyContent: 'center'}} sm={12} xs={12} md={5} lg={5}>
                    <Box sx={{position: 'relative', width: '100%', height: '100%'}}>
                        <ReactPlayer url='https://youtu.be/oH43sQDRAbk' className={styles.reactPlayer} height='inherit' width={'inherit'}/>
                        <Stack sx={{position: 'absolute', height: '100%', transform: 'translate(-90%,0)', justifyContent: 'space-evenly', top: 0}}>
                            {[0,1,2].map( item => <Box key={`stripe_${item}`} sx={{width: '100vw', position: 'relative', backgroundColor: '#FEA224', height: '50px', zIndex: 2}}/>)}
                        </Stack>
                    </Box>
                </Grid>
                <Grid item md={2} lg={2} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', [theme.breakpoints.down('md')]: {display: 'none'}}}>
                    <Divider orientation="vertical" variant='fullWidth' sx={{backgroundColor: 'white', width: '1px'}}/>
                </Grid>
                <Grid item sx={12} xs={12} md={5} lg={5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <Stack spacing={2}>
                        <Typography sx={{fontFamily: 'Roboto', fontWeight: '300', fontSize: '24px', textAlign: 'center', color: '#fff'}}>
                            A problem-solving competition to create innovative solutions for real-world problems 
                        </Typography>
                        <Stack>
                            <Button variant='action dark' sx={{alignSelf: 'center'}}>
                                Pre-Register Now
                            </Button>
                            <Button variant='link' sx={{[theme.breakpoints.down('md')]: {display: 'none'}}}>
                                Learn More
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Page>
    )
}