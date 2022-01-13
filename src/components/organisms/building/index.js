import { Typography, Box, useTheme} from '@mui/material';
import { Page } from 'components/wrappers'

function Building(props) {
    const theme = useTheme()
    return (
        <Page minHeight='70vh' bgColor={theme.palette.dark.main}>
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '40px'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '39px', color: theme.palette.primary.main, alignSelf: 'center !important'}}>
                    Under Construction
                </Typography>
                <img src='https://media4.giphy.com/media/SWhoKfLvgsEp81mD1J/giphy.gif?cid=790b7611da0ad8204a2ee588cbf219cbd2e6a7742dcfc3bd&rid=giphy.gif&ct=g' style={{ border: `10px solid ${theme.palette.primary.main}`, borderRadius: '100px'}}/>
            </Box>
        </Page>
    );
}

export default Building;