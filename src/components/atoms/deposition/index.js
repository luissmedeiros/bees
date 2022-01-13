import { Box } from '@mui/material'

function Deposition(props) {
    return (
        <Box sx={{backgroundColor: 'white', maxHeight: '500px', minHeight: '300px', padding: '40px', borderRadius: '20px', border: '4px solid #282828'}}>
            <Box sx={{position: 'relative'}}>
                <img src='/quotes.svg' style={{position: 'absolute', top: 0, left: 0, transform: 'translate(-42%,-40%)', opacity: '0.4', height: '30px', filter: 'invert(11%) sepia(0%) saturate(0%) hue-rotate(207deg) brightness(95%) contrast(87%)'}}/>
            </Box>
            <Box sx={{position: 'relative', zIndex: 2, "&:before": {content: 'open-quote'}, "&:after":{ content: 'close-quote'} }}>
                Something {props.deposition}
            </Box>
        </Box>
    );
}

export default Deposition;