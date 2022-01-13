import { Box, TextField, Typography, Button, useTheme, Stack, Input } from "@mui/material"

export default function ContactForm(){
    const theme = useTheme()
    return(
        <Stack sx={{backgroundColor: '#fff', p: 3, borderRadius: '20px'}} spacing={2}>
            <Stack spacing={1} sx={{flex: 1, width: '100%', display: 'flex'}}>
                <Typography sx={{alignSelf: 'flex-start !important'}}>
                    Your Name
                </Typography>
                <Input sx={{'&:before': {display: 'none'}, border: '2px solid #e3e2e7', borderRadius: '10px', padding: '5px 10px', '&:after': {display: 'none'} }} fullWidth/>
            </Stack>
            <Stack spacing={1} sx={{flex: 1, width: '100%', display: 'flex'}}>
                <Typography sx={{alignSelf: 'flex-start !important'}}>
                    Mail
                </Typography>
                <Input sx={{'&:before': {display: 'none'}, border: '2px solid #e3e2e7', borderRadius: '10px', padding: '5px 10px', '&:after': {display: 'none'} }} fullWidth/>
            </Stack>
            <Stack spacing={1} sx={{flex: 1, width: '100%', display: 'flex'}}>
                <Typography sx={{alignSelf: 'flex-start !important'}}>
                    Message
                </Typography>
                <Input sx={{'&:before': {display: 'none'}, border: '2px solid #e3e2e7', borderRadius: '10px', padding: '10px 10px', '&:after': {display: 'none'} }} multiline minRows={5} fullWidth/>
            </Stack>
            <Stack spacing={1} sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <Button variant='action light' sx={{borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': {backgroundColor: theme.palette.primary.main}, alignSelf: 'flex-end'}}>
                    Send Message
                </Button>
            </Stack>
        </Stack>
    )
}