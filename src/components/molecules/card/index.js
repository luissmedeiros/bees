import { Box, Stack, Typography, useTheme } from '@mui/material';

function Card(props) {
    const theme = useTheme()
    return (
        <Box sx={{backgroundColor: 'white', height: '100%', position: 'relative', border: `4px solid ${theme.palette.primary.main}`, borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Stack sx={{position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={`/${props.title}.svg`} style={{width: '100%', height: '100%'}}/>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '40px'}}>
                    <Typography variant='h3' sx={{fontWeight: 'bold'}}>
                        {props.title.toUpperCase()}
                    </Typography>
                    <Typography sx={{fontSize: '1rem', marginTop: '20px', textAlign: 'center'}}>
                        {props.desc}
                    </Typography>
                </Box>
            </Stack>

        </Box>
    );
}

export default Card;