import { Stack, useTheme, useThemeProps } from "@mui/material"
import { Logo, NavBar } from "components/atoms"
import { Box } from "@mui/material"
import { navigation } from 'settings'
import Link from "next/link"

export default function Header(){
    const theme = useTheme()
    return(
        <Box sx={{width: '100%', backgroundColor: 'white', display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'sticky', top: 0, zIndex: 99, minHeight: '60px'}}>
            <Stack direction={'row'} sx={{alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '1440px', position: 'relative', minHeight: '100%'}}>
                <Box sx={{position: 'absolute', left: 70, [theme.breakpoints.down('md')]: { left: 30 }}}>
                    <Link href='/' passHref>
                        <a>
                            <Logo height="30"/>
                        </a>
                    </Link>
                </Box>
                <NavBar hotlinks={navigation}/>
            </Stack>
        </Box>
    )
}