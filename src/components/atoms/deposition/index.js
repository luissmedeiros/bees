import { Box, Stack, Typography } from '@mui/material'

function Deposition(props) {
    const {author, profile_picture, content} = props.deposition
    return (
        <Box sx={{backgroundColor: 'white', maxHeight: '500px', padding: '20px 40px', borderRadius: '20px', border: '4px solid #282828'}}>
            <Box sx={{position: 'relative'}}>
                <img src='/quotes.svg' style={{position: 'absolute', top: 0, left: 0, transform: 'translate(-42%,-40%)', opacity: '0.4', height: '30px', filter: 'invert(11%) sepia(0%) saturate(0%) hue-rotate(207deg) brightness(95%) contrast(87%)'}}/>
            </Box>
            <Box sx={{position: 'relative', zIndex: 2, "&:before": {content: 'open-quote'}, "&:after":{ content: 'close-quote'} }}>
                {content}
            </Box>
            <Stack spacing={1} sx={{alignSelf: 'flex-end', mt: '20px', justifyContent: 'flex-end', display: 'flex', alignItems: 'center'}} direction='row'>
                <Typography>
                    {author}
                </Typography>
                <img src={profile_picture} style={{width: '32px', height: '32px', borderRadius: '32px', backgroundColor: '#c4c4c4'}}/>
            </Stack>
        </Box>
    );
}

export default Deposition;