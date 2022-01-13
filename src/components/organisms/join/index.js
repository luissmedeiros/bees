import { Button, Input, Stack, Typography, useTheme, Box } from '@mui/material';
import {Page} from 'components/wrappers'

function Join(props) {
    const theme = useTheme()
    return (
        <Page bgColor="#FEA224">
            <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography color={theme.palette.dark.main} sx={{fontSize: '39px', mt: '40px', mb: '20px'}}>
                    Want to be a Partner? <b>Join Us</b>
                </Typography>
                <Stack sx={{backgroundColor: '#fff', p: 3, borderRadius: '20px', width: '100%', maxWidth: '640px', mb: '40px'}} spacing={2}>
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
                    <Stack>
                        <Typography>
                            Our team will enter in contact with you in the next 48h to discuss our partnership.
                        </Typography>
                    </Stack>
                    <Stack spacing={1} sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <Button variant='action light' sx={{borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': {backgroundColor: theme.palette.primary.main}, alignSelf: 'flex-end'}}>
                            Submit
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Page>
    );
}

export default Join;