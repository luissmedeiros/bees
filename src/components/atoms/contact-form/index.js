import { Box, TextField, Typography, Button, useTheme, Stack, Input } from "@mui/material"
import { useState } from "react"

export default function ContactForm(){
    const theme = useTheme()
    const [form, updateForm] = useState({name: '', mail: '',  message: ''})
    const [alert, setAlert] = useState({type: 'error', msg: ''})

    const handleChange = (e) => {
        updateForm({...form, [e.target.id]: e.target.value})
    }
    const send = () => {

        if(form.name.length == 0){
            setAlert({type: 'error', msg: 'Name must be filled'})
            return
        }
        if(form.mail.length == 0){
            setAlert({type: 'error', msg: 'Mail must be filled'})
            return
        }
        if(form.message.length == 0){
            setAlert({type: 'error', msg: 'Message must be filled'})
            return
        }
        console.log('params', form)
        setAlert({type: 'success', msg: 'Message Sent'})


    }
    return(
        <Stack sx={{backgroundColor: '#fff', p: 3, borderRadius: '20px'}} spacing={2}>

            {alert.msg && 
                <Typography sx={{color: alert.type == 'error' ? 'red' : 'green'}}>
                 {alert.msg}
                </Typography>
            }
            
            <Stack spacing={1} sx={{flex: 1, width: '100%', display: 'flex'}}>
                <Typography sx={{alignSelf: 'flex-start !important'}}>
                    Your Name
                </Typography>
                <Input id='name' onChange={handleChange} sx={{'&:before': {display: 'none'}, border: '2px solid #e3e2e7', borderRadius: '10px', padding: '5px 10px', '&:after': {display: 'none'} }} fullWidth/>
            </Stack>
            <Stack spacing={1} sx={{flex: 1, width: '100%', display: 'flex'}}>
                <Typography sx={{alignSelf: 'flex-start !important'}}>
                    Mail
                </Typography>
                <Input id='mail' onChange={handleChange} sx={{'&:before': {display: 'none'}, border: '2px solid #e3e2e7', borderRadius: '10px', padding: '5px 10px', '&:after': {display: 'none'} }} fullWidth/>
            </Stack>
            <Stack spacing={1} sx={{flex: 1, width: '100%', display: 'flex'}}>
                <Typography sx={{alignSelf: 'flex-start !important'}}>
                    Message
                </Typography>
                <Input id='message' onChange={handleChange} sx={{'&:before': {display: 'none'}, border: '2px solid #e3e2e7', borderRadius: '10px', padding: '10px 10px', '&:after': {display: 'none'} }} multiline minRows={5} fullWidth/>
            </Stack>
            <Stack spacing={1} sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <Button onClick={send} variant='action light' sx={{borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': {backgroundColor: theme.palette.primary.main}, alignSelf: 'flex-end'}}>
                    Send Message
                </Button>
            </Stack>
        </Stack>
    )
}