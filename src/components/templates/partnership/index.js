import { Divider, Typography, useTheme, Box, Button, Stack } from '@mui/material';
import { Columns } from 'components/wrappers';
import React from 'react';

function Partnership(props) {
    const theme = useTheme()
    return (
        <Columns bgColor={theme.palette.dark.main} overrideWrap={{xs: 12, sm: 6, md: 6, lg: 6}} wrap='reverse'>
            <Stack spacing={3} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100%'}}>
                <Typography color={'white'} variant='h1' sx={{fontSize: '39px', [theme.breakpoints.down('md')]: {fontSize: '26px'}, fontWeight: '500', [theme.breakpoints.down('lg')]: {fontSize: '34px'}}}>
                    Innovate your institution with 
                    BEES and impact Brazilian and 
                    global education.
                </Typography>
                <Button variant='action dark' sx={{alignSelf: 'flex-start', [theme.breakpoints.down('md')]: {alignSelf: 'center !important'}}}>
                    Become Our Partner
                </Button>
            </Stack>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <Box sx={{flex: 1, position: 'relative', [theme.breakpoints.down('sm')] : {display: 'none'}}}>
                    <Divider sx={{width: '100%', backgroundColor: theme.palette.primary.main, maxHeight: '4px', height: '3px', top: '40%', position: 'absolute'}}/>
                </Box>
                <img src='/mascote.png' style={{maxWidth: '100%', maxHeight: '100%', margin: '10px -20px'}}/>
            </Box>
        </Columns>
    );
}

export default Partnership;