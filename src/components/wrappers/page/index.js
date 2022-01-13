import { Box, useTheme } from "@mui/material"

export default function Page(props){
    const theme = useTheme()
    return(
    <Box sx={{position: 'relative', width: '100%', backgroundColor: props.bgColor ? props.bgColor : 'white', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
        <Box sx={{width: '100%', maxWidth: '1440px', padding: props.padding ? props.padding : '0px 70px', minHeight: props.minHeight ? props.minHeight : '70vh', position: 'relative', display: 'flex', flexDirection: 'column' ,[theme.breakpoints.down('md')]: {padding: '0px 30px', minHeight: '0px'}, ...props.sx}}>
            {props.children}
        </Box>
    </Box>
    )
}