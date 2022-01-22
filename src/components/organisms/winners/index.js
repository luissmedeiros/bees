import { Typography, Box, Stack, Grid, useTheme } from '@mui/material';
import { Page } from 'components/wrappers';

const contestants = [
    {
        title: 'White Tees',
        img: '/white-tees.png',
        position: 1
    },
    {
        title: 'CEO',
        img: '/ceo.png',
        position: 2
    },
    {
        title: 'E-Tie',
        img: '/e-tie.png',
        position: 3
    },
    {
        title: 'Eco Fash',
        img: '/eco-fash.png',
        position: 4
    },
    {
        title: 'Borrowed Changes',
        img: '/borrowed-changes.png',
        position: 5
    },
    {
        title: 'Wear Eco',
        img: '/wear-eco.png',
        position: 5
    }
]

const positions = () => {
    return [...new Set(contestants.map(item => item.position))]
}

const getPosition = (i) => {
    var j = i % 10,
    k = i % 100;

    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }

    return i + "th";
}

function Winners(props) {
    const theme = useTheme()
    return (
        <Page>
            <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'center'}}>
                <img src='/trophy.svg' style={{maxHeight: '120px'}}/>
                <Typography variant='h2' sx={{fontWeight: '500'}}>
                    2021 Winners
                </Typography>
            </Stack>
            <Grid container spacing={3} sx={{alignItems: 'stretch', justifyContent: 'center'}}>
                {positions().map((position) => {
                    const filtered = contestants.filter( (item) => item.position === position)
                    const size = filtered.lenght * 4 > 12 ? 12 : filtered.length*4
                    return(
                        <Grid item xs={size} sm={size} md={size} lg={size} key={`winners_position_${position}`}>
                            <Box sx={{p: '10px', height: '100%', alignItems:'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                                <Typography variant='h3' sx={{textAlign: 'center', marginBottom: '20px', fontWeight: '400'}}>
                                    {getPosition(position)} Place
                                </Typography>
                                <Stack spacing={2} direction='row' sx={{alignItems: 'center', justifyContent: 'space-around', flex: 1, width: '100%'}}>
                                    {filtered.map( item => {
                                        return(
                                            <Stack spacing={3} sx={{ height: '100%', alignItems: 'center', justifyContent: 'space-around'}} key={`${position}_${item.title}`}>
                                                <Box sx={{height: '50%'}}>
                                                    <img src={item.img} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                                                </Box>
                                                <Box sx={{height: '20%', alignItems: 'center', justifyContent:'center', display: 'flex'}}>
                                                    <Typography variant='h4' sx={{fontWeight: '400'}}>
                                                        {item.title}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        )
                                    })}
                                </Stack>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>

        </Page>
    );
}

export default Winners;