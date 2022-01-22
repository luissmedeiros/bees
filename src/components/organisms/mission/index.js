import { Flag, RemoveRedEye, Diamond } from '@mui/icons-material';
import { Typography, Box, Stack, useTheme } from '@mui/material';
import { Columns, Page } from 'components/wrappers';
import React from 'react';

function Mission(props) {
    const theme = useTheme()
    return (
        <Columns spacing={4} footer={'BEES is just the beginning.'}>
            <Box sx={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
                <Box sx={{position: 'absolute', right: 0, [theme.breakpoints.down('md')]: {display: 'none'}}}>
                    <img src='/mascote2.png'/>
                </Box>
                <Typography sx={{mb: '10px', fontSize: '39px', fontWeight: 'bold', textAlign: 'left !important', alignSelf: 'flex-start !important'}}>
                    The Start
                </Typography>
                <Stack spacing={2} sx={{width: '100%', alignItems: 'flex-start !important', justifyContent: 'flex-start !important', display: 'flex', flexDirection: 'column'}}>
                    <Typography sx={{maxWidth: '60%', fontFamily: 'roboto', textAlign: 'left !important', alignSelf: 'flex-start !important', [theme.breakpoints.down('md')]: {maxWidth: '100% !important'}}}>
                        A competition where worldwide students solve 
                        contemporary issues by proposing solutions.
                    </Typography>
                    <Typography sx={{maxWidth: '80%', fontFamily: 'roboto', textAlign: 'left !important', alignSelf: 'flex-start !important', [theme.breakpoints.down('md')]: {maxWidth: '100% !important'}}}>
                        We envisioned students learning about the subjects 
                        that inspired us (Business, Economics,
                        Entrepreneurship, Sustainability) actively, motivated intrinsically to learn, 
                        seeking to win and
                        follow through with their projects.
                    </Typography>
                    <Typography sx={{fontFamily: 'Roboto', textAlign: 'left !important', alignSelf: 'flex-start !important'}}>
                        That’s how BEES started: a competition idea. But hearing 
                        how we reshaped students’
                        perspectives motivated us to 
                        do more. We now spearhead an entrepreneurial educational
                        movement, inspiring students to become protagonists in 
                        their education and learn through
                        applied problem-solving. 
                    </Typography>
                    <Typography sx={{fontFamily: 'Roboto', textAlign: 'left !important', alignSelf: 'flex-start !important'}}>
                        Students, through BEES, learn to value the process of 
                        creation and the
                        importance of social impact.
                    </Typography>
                    <Typography sx={{fontFamily: 'Roboto', textAlign: 'left !important', alignSelf: 'flex-start !important'}}>
                        We are unique: we unite innovation and entrepreneurship 
                        with education to
                        revolutionize the world.
                    </Typography>
                </Stack>
            </Box>
            <Box>
                <Typography sx={{mb: '10px', fontSize: '39px', fontWeight: 'bold', textAlign: 'left !important'}}>
                    Mission, Vision & Values
                </Typography>
                <Stack spacing={2} sx={{width: '100%', alignItems: 'flex-start !important', justifyContent: 'flex-start !important', display: 'flex', flexDirection: 'column'}}>
                    <Stack direction='row' sx={{display: 'flex', alignItems: 'center', width: '100%'}} spacing={5}>
                        <RemoveRedEye sx={{fontSize: '32px', color: theme.palette.primary.main}}/>
                        <Typography sx={{maxWidth: '60%', fontFamily: 'roboto', textAlign: 'left !important', alignSelf: 'flex-start !important', [theme.breakpoints.down('md')]: {maxWidth: '100% !important'}}}>
                        Revolutionize the education sector by bringing with it a focus on the developing youth,
                        helping them get hands-on experience and make a good career path choice.
                        </Typography>
                    </Stack>
                    <Stack direction='row' sx={{display: 'flex', alignItems: 'center', width: '100%'}} spacing={5}>
                        <Flag sx={{fontSize: '32px', color: theme.palette.primary.main}}/>
                        <Stack spacing={1}>
                            <Typography sx={{maxWidth: '80%', fontFamily: 'roboto', textAlign: 'left !important', alignSelf: 'flex-start !important'}}>
                            Our values are - Innovation, Practical Learning, Collaboration, Leadership, Impact.
                            </Typography>
                            <Typography sx={{fontFamily: 'roboto', textAlign: 'left !important', alignSelf: 'flex-start !important'}}>
                            By promoting protagonism and collaborative learning, BEES teaches the value of the creative
                            process, the importance of social impact, and the skills needed for the 21st century.
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row' sx={{display: 'flex', alignItems: 'center', width: '100%'}} spacing={5}>
                        <Diamond sx={{fontSize: '32px', color: theme.palette.primary.main}}/>
                        <Typography sx={{maxWidth: '60%', fontFamily: 'roboto', textAlign: 'left !important', alignSelf: 'flex-start !important'}}>
                        To be a reference in Entrepreneurship Education by encouraging the resolution of
                        contemporary problems, generating businesses with socio-environmental impact 
                        in communities
                        around the world.
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Columns>
    );
}

export default Mission;