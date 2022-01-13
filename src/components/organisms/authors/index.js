import { Box, Typography, useTheme, Stack } from '@mui/material'
import { Columns } from "components/wrappers";

export default function Authors(){
    const theme = useTheme()
    return(
        <Columns title={'The faces behind BEES'} overrideWrap={{md: 12}}>
            <Stack sx={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column', pb: '20px'}} spacing={2}>
                <Box sx={{backgroundColor: theme.palette.primary.main, width: 'fit-content', height: 'fit-content', borderRadius: '200px', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src='/carolina_ferrer.png' style={{ borderRadius: '200px'}}/>
                </Box>
                <Stack sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography sx={{fontSize: '28px', fontWeight: 'bold'}}>
                        Carolina Ferrer
                    </Typography>
                    <Typography sx={{textAlign: 'center'}}>
                    Chief Executive Owner of BEES Global, 
                    Study-Abroad Mentor and Entrepreneur
                    </Typography>
                </Stack>
            </Stack>
            <Stack sx={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column', pb: '20px'}} spacing={2}>
                <Box sx={{backgroundColor: theme.palette.primary.main, width: 'fit-content', height: 'fit-content', borderRadius: '200px', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src='/anna_aragao.png' style={{ borderRadius: '200px'}}/>
                </Box>
                <Stack sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography sx={{fontSize: '28px', fontWeight: 'bold'}}>
                        Anna Aragão
                    </Typography>
                    <Typography sx={{textAlign: 'center'}}>
                    Chief Financial Owner of BEES Global, 
                    Project Consultant and Entrepreneur
                    </Typography>
                </Stack>
            </Stack>
            <Stack sx={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column', pb: '20px'}} spacing={2}>
                <Box sx={{backgroundColor: theme.palette.primary.main, width: 'fit-content', height: 'fit-content', borderRadius: '200px', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src='/felipe_almeida.png' style={{ borderRadius: '200px'}}/>
                </Box>
                <Stack sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography sx={{fontSize: '28px', fontWeight: 'bold'}}>
                        Felipe Almeida
                    </Typography>
                    <Typography sx={{textAlign: 'center'}}>
                        {`Investing partner of BEES Global and the 
                        law firm Bastos, Covre & Pinheiro Advogados
                        Associados, Business Mentor and Entrepreneur`}
                    </Typography>
                </Stack>
            </Stack>
        </Columns>
    )
}