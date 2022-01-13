import { Box, Typography, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/system';
import { Columns } from 'components/wrappers';

function Products(props) {
    const theme = useTheme()
    return (
        <Columns spacing={1}>
            <Box sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <img src='/products.png' style={{maxWidth: '100%', maxHeight: '100%'}}/>
            </Box>
            <Box sx={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                <Stack spacing={3} sx={{position:'relative', zIndex: 1}}>
                    <Typography sx={{fontSize: '31px', maxWidth: '512px'}}>
                        Want to know more about our initiatives and products? Stay updated!
                    </Typography>
                    <Button variant='action light' sx={{[theme.breakpoints.down('md')]: {textAlign: 'center', alignSelf: 'center'} }}>
                        Bee Notified First
                    </Button>
                </Stack>
                <Box sx={{position: 'absolute', maxWidth: '100%', maxHeight: '100%', overflow: 'hidden', height: '100%', right: 0, [theme.breakpoints.down('md')]: {display: 'none'} }}>
                    <img src='/seal-monochromatic-bees.svg' style={{zIndex: 0, maxWidth: '100%', maxHeight: '100%'}}/>
                </Box>
            </Box>
        </Columns>
    );
}

export default Products;