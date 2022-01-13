import { Mail, Phone } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme, Grid } from "@mui/material";
import { ContactForm, Social } from "components/atoms";
import { Columns } from "components/wrappers";

export default function ContactUs(props){
    const theme = useTheme()
    return(
        <Columns bgColor={props.alt ? theme.palette.dark.main : theme.palette.primary.main}>
            <Stack spacing={5}>
                <Grid container spacing={2}>
                    <Grid item md={12} lg={12} sm={6} xs={12}>
                        <Stack>
                            <Typography sx={{fontSize: '43px', fontWeight: 'bold', color: props.alt ? theme.palette.primary.main : theme.palette.dark.main}}>
                                Contact Us
                            </Typography>
                            <Typography sx={{fontSize: '20px', color: props.alt ? theme.palette.primary.main : theme.palette.dark.main}}>
                                Monday - Friday: 9am - 6pm
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={12} lg={12} sm={6} xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', [theme.breakpoints.down("md")]: {justifyContent: 'center'}}}>
                        <Stack sx={{width: 'fit-content', alignSelf:'center'}} spacing={2}>
                            <Stack sx={{border: `2px solid ${props.alt ? theme.palette.primary.main : theme.palette.dark.main}`, p: 1, alignSelf: 'flex-start', borderRadius: '10px', width: '100%'}} direction='row' spacing={2}>
                                <Phone sx={{color: props.alt ? theme.palette.primary.main : theme.palette.dark.main}}/>
                                <Typography sx={{color: props.alt ? theme.palette.primary.main : theme.palette.dark.main, '& a[href^=tel]': {textDecoration: 'none', color: props.alt ? theme.palette.primary.main : theme.palette.dark.main }}}>
                                    +55 21 96486-2673
                                </Typography>
                            </Stack>
                            <Stack sx={{border: `2px solid ${props.alt ? theme.palette.primary.main : theme.palette.dark.main}`, p: 1, alignSelf: 'flex-start', borderRadius: '10px', width: '100%'}} direction='row' spacing={2}>
                                <Mail sx={{color: props.alt ? theme.palette.primary.main : theme.palette.dark.main}}/>
                                <Typography sx={{color: props.alt ? theme.palette.primary.main : theme.palette.dark.main}}>
                                    info@beesglobal.co
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{alignSelf: 'start', [theme.breakpoints.down("md")]: {alignSelf: 'center'} }}>
                    <Social color={props.alt ? theme.palette.primary.main : theme.palette.dark.main}/>
                </Box>
            </Stack>
            <ContactForm/>
        </Columns>
    )
}