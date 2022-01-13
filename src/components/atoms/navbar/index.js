import { Box, Typography, Stack, Button, Popper, Divider, useTheme} from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import Link from 'next/link'
import { ArrowDropDown, ArrowDropUp, Phone } from "@mui/icons-material"
import { useRouter } from "next/router"

export default function NavBar({hotlinks}){
    const activeRoute = useRouter().pathname
    const theme = useTheme()
    return(
        <Stack direction={'row'} spacing={2} sx={{
            alignItems: 'center',
            justifyContent: 'center',
            p: 1,
            [theme.breakpoints.down('md')]: {display: 'none'} 
        }}>
            {hotlinks.map( link => {
                return(
                    link.multiple ? 
                        <Multiple key={`navbar ${link.title}`} activeRoute={activeRoute} link={link}/>
                        :
                        <Single key={`navbar ${link.title}`} activeRoute={activeRoute} link={link}/>
                )
            })}
        </Stack>
    )
}

const Multiple = ({link, activeRoute}) => {

    const [anchor, setAnchor] = useState(false)
    const [width, setWidth] = useState(0)
    
    const open = Boolean(anchor)

    const handleClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
        setWidth(`${anchor ? 0 : event.currentTarget.offsetWidth}px`)
    }

    const handleScroll = useCallback(()=>{
        if(open){
            if(anchor){
                setAnchor(null)
            }
        }
    }, [anchor])

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, true)
        return () => {
            window.removeEventListener('scroll', handleScroll, true)
        }
    }, [anchor])


    return(
        <>
            <Button onClick={handleClick} variant={`navbar${activeRoute.includes(link.route) ? ' active' : open ? ' active' : ''}`} disableRipple>
                <Stack direction={'row'} sx={{alignItems: 'center'}}>
                    {link.title}
                    {open ? 
                        <ArrowDropUp sx={{fontSize: 16}}/>
                        :
                        <ArrowDropDown sx={{fontSize: 16}}/>
                    }

                </Stack>
            </Button>
            <Popper open={open} anchorEl={anchor} style={{zIndex: 99, width}}>
                <Box sx={{ p: 1, bgcolor: '#E9E9E9', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                    <Stack>
                        {link.options.map( (option, index) => {
                            return(
                                <div key={`${link.title}_option_${index}`}>
                                {index > 0 && <Divider variant='middle'/>}
                                <Link href={`/competition/${option.toLowerCase()}`} passHref>
                                    <Button variant='multiple item' onClick={()=>setAnchor(null)}>
                                        {option}
                                    </Button>
                                </Link>
                                </div>
                            )
                        })}
                    </Stack>
                </Box>
            </Popper>
        </>
    )
}

const Single = ({link, activeRoute}) => {
    return(
        <Link href={link.route} passHref >
            <Button variant={`navbar${activeRoute.includes(link.route) ? ' active' : ''}`} disableRipple>
                {link.title}
            </Button>
        </Link>
    )
}
/*

each link object = {
    title: 'The Competition', *required
    multiple: t/f, *not required, defaults to false
    options: [Home, Global, Brazil], *not required

}
*/