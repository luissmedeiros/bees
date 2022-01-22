import { useTheme, Grid, Typography, Stack, Box } from "@mui/material";
import { Page } from "components/wrappers";


function Proposal(props) {
    const theme = useTheme()
    return (
       <Page bgColor={theme.palette.dark.main}>
           <Grid container spacing={3} sx={{mt: '10px'}}>
               <Grid item md={7} lg={7} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Stack spacing={2}>
                        <Typography variant='h3' sx={{color: theme.palette.primary.main, fontWeight: 'bold'}}>
                            OUR PROPOSAL
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.main, maxWidth: '520px'}}>
                            Students, through BEES, learn to value 
                            the process of creation and the importance 
                            of social
                            impact — we empower students to 
                            become protagonists of their own education 
                            and learn
                            through applied problem-solving.
                        </Typography>
                    </Stack>
               </Grid>
               <Grid item md={5} lg={5} xs={12} sm={12}>
                    <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                        <img src="/people.png" style={{width: '100%', height: '100%', backgroundColor: theme.palette.primary.main, maxWidth: '428px'}}/>

                    </Box>
               </Grid>
           </Grid>
       </Page>
    );
}

export default Proposal;