import { Page } from 'components/wrappers'
import { Typography, useTheme, Box, Stack, Grid } from '@mui/material'

const mentions = [
    {
        titles: ['Most Dynamic Presentation'],
        img: '/cow.png'
    },
    {
        titles: ['Best Speaker'],
        mentioned: ['Sophia Nascimento Silva'],
        img: '/eco-fash.png'
    },
    {
        titles: ['Most Persuasive Presentation'],
        mentioned: ['E-Tie'],
        img: '/e-tie.png'
    },
    {
        titles: ['Best Team Identity', 'Most Beautiful Presentation'],
        mentioned: ['CEO', 'CEO'],
        img: '/ceo.png'
    },
]

function Mentions(props) {
    const theme = useTheme()
    return (
        <Page bgColor={theme.palette.dark.main}>
            <Box sx={{alignItems: 'center', justifyContent: 'center', width: '100%', display: 'flex', pt: '80px', mb: '80px'}}>
                <Typography variant='h1' sx={{maxWidth: '600px', fontWeight: '500', color: theme.palette.primary.main, textAlign: 'center'}}>
                    2021 Honorable Mentioned Projects
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{mb: '80px'}}>
                {mentions.map(mention => {
                    return(
                        <Grid item md={6} lg={6} sm={12} xs={12}>
                                <Stack spacing={2} direction={'row'} sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Box style={{maxWidth: '110px'}}>
                                        <img src={mention.img} style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
                                    </Box>
                                    <Stack color={'white'} sx={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', display: 'flex'}}>
                                        {mention.titles.map((title, index) => {
                                            return(
                                                <Stack sx={{width: '100%'}}>
                                                    <Box>
                                                        <Typography sx={{fontWeight: 'bold', textAlign: 'left !important'}}>
                                                            {title}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                    {Array.isArray(mention.mentioned) && mention.mentioned[index] && 
                                                        <Typography sx={{textAlign: 'left !important'}}>
                                                            {mention.mentioned[index]}
                                                        </Typography>
                                                    }
                                                    </Box>
                                                </Stack>
                                            )
                                        })}
                                    </Stack>
                                </Stack>
                        </Grid>
                    )
                })}
            </Grid>
        </Page>
    );
}

export default Mentions;