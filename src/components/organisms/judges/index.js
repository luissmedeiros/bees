import { Box, Typography, useTheme, Stack } from '@mui/material'
import { Columns } from "components/wrappers";

export default function Judges(){
    const theme = useTheme()
    return(
        <Columns title={'2021 Judges'} overrideWrap={{md: 12}} spacing={2}>
            <Stack sx={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column', pb: '20px'}} spacing={2}>
                <Box sx={{backgroundColor: theme.palette.primary.main, width: 'fit-content', height: 'fit-content', borderRadius: '200px', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src='/liliam_benzi.png' style={{ borderRadius: '200px'}}/>
                </Box>
                <Stack sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography sx={{fontSize: '28px', fontWeight: 'bold'}}>
                        Liliam Benzi
                    </Typography>
                    <Typography sx={{textAlign: 'center'}}>
                        LDB’s CEO. Specialist in communication, 
                        marketing, and entrepreneurial strategies
                    </Typography>
                </Stack>
            </Stack>
            <Stack sx={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column', pb: '20px'}} spacing={2}>
                <Box sx={{backgroundColor: theme.palette.primary.main, width: 'fit-content', height: 'fit-content', borderRadius: '200px', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src='/anderson_diehl.png' style={{ borderRadius: '200px'}}/>
                </Box>
                <Stack sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography sx={{fontSize: '28px', fontWeight: 'bold'}}>
                        Anderson Diehl
                    </Typography>
                    <Typography sx={{textAlign: 'center'}}>
                        Marketing Director at Advn/rs, Director 
                        of Innovation and connection with 
                        startups at Assespro.
                        Founder of the 
                        Angel Investor Club
                    </Typography>
                </Stack>
            </Stack>
            <Stack sx={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column', pb: '20px'}} spacing={2}>
                <Box sx={{backgroundColor: theme.palette.primary.main, width: 'fit-content', height: 'fit-content', borderRadius: '200px', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src='/felipe_almeida.png' style={{ borderRadius: '200px'}}/>
                </Box>
                <Stack sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography sx={{fontSize: '28px', fontWeight: 'bold'}}>
                        Fellipe Almeida
                    </Typography>
                    <Typography sx={{textAlign: 'center'}}>
                        Partner of the firm Bastos, Covre & 
                        Pinheiro Lawyers. Creator and 
                        Coordinator of BCP Start.
                    </Typography>
                </Stack>
            </Stack>
        </Columns>
    )
}