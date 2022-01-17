import { Stack, useTheme, useThemeProps, IconButton, Drawer, styled, Button, Box, Typography, Popper, Divider } from "@mui/material"
import { Menu, ChevronRight, ArrowDropDown, ArrowDropUp } from "@mui/icons-material"
import { Logo, NavBar } from "components/atoms"
import { navigation } from 'settings'
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/router"

export default function Header(){

    const [state, setState] = useState(false)
    const theme = useTheme()
    const activeRoute = useRouter().pathname

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState(open);
      };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    return(
        <Box sx={{width: '100%', backgroundColor: 'white', display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'sticky', top: 0, zIndex: 99, minHeight: '60px'}}>
            <Stack direction={'row'} sx={{alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '1440px', position: 'relative', minHeight: '100%', [theme.breakpoints.down('md')]: {justifyContent: 'flex-end', padding: '0px 30px', backgroundColor: 'white'}}}>
                <Box sx={{position: 'absolute', left: 70, [theme.breakpoints.down('md')]: { left: 30, top: '50%', transform: 'translateY(-50%)'}}}>
                    <Link href='/' passHref>
                        <a style={{margin: 0}}>
                            <Logo height="30px"/>
                        </a>
                    </Link>
                </Box>
                <NavBar hotlinks={navigation}/>
                <IconButton
                    size="large"
                    edge='start'
                    // color='#000'
                    sx={{display: 'none', [theme.breakpoints.down('md')]: { display: 'flex'}}}
                    onClick={toggleDrawer(true)}
                >
                    <Menu sx={{fontSize: 24}}/>
                </IconButton>
                <Drawer
                    anchor={'right'}
                    open={state}
                    onClose={toggleDrawer(false)}
                    sx={{
                        width: 256,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 256,
                            boxSizing: 'border-box',
                            },
                    }}
                >
                    <DrawerHeader>
                        <IconButton onClick={(toggleDrawer(false))}>
                            <ChevronRight/>
                        </IconButton>
                    </DrawerHeader>
                    <Stack spacing={1}>
                        <Single link={{route: '/', title: 'Home'}} activeRoute={activeRoute} toggle={toggleDrawer}/>
                        {navigation.map( item => {
                            return(
                                item.multiple ? 
                                    <Multiple key={item.title} link={item} activeRoute={activeRoute} toggle={toggleDrawer}/>
                                :
                                    <Single key={item.title} link={item} activeRoute={activeRoute} toggle={toggleDrawer}/>
                            )
                        })}
                    </Stack>
                </Drawer>
            </Stack>
        </Box>
    )
}

const Single = ({link, activeRoute, toggle}) => {
    return(
        <Link href={link.route}>
            <Button variant={`navbar${activeRoute == link.route ? ' active' : ''}`} disableRipple onClick={toggle(false)}>
                {link.title}
            </Button>
        </Link>
    )
}

const Multiple = ({link, activeRoute, toggle}) => {

    const [open, setOpen] = useState(false)
    const [width, setWidth] = useState(0)

    const theme = useTheme()
    
    const handleClick = (event) => {
        setOpen(open ? null : event.currentTarget);
        setWidth(`${open ? 0 : event.currentTarget.offsetWidth}px`)
    }


    return(
        <>
            <Button onClick={handleClick}
                sx={{
                    '&:before':{
                        maxWidth: activeRoute.includes(link.route) ? '100%' : open ? '18px' : '0px'
                    }
                }}
                variant={`navbar${activeRoute.includes(link.route) ? ' active' : open ? ' active' : ''}`}  disableRipple>
                <Stack direction={'row'} sx={{alignItems: 'center'}}>
                    {link.title}
                    {open ? 
                        <ArrowDropUp sx={{fontSize: 16}}/>
                        :
                        <ArrowDropDown sx={{fontSize: 16}}/>
                    }

                </Stack>
            </Button>
            <Box sx={{ overflow: 'hidden', maxHeight: `${open ? '92px' : '0px'}`, transition: '0.4s'}}>
                <Stack>
                    {link.options.map( (option, index) => {
                        return(
                            <div key={`${link.title}_option_${index}`}>
                            <Link href={`/competition/${option.toLowerCase()}`} passHref>
                                <Button variant='multiple item' sx={{color: activeRoute == `/competition/${option.toLowerCase()}` ? theme.palette.primary.main : undefined}} onClick={toggle(false)}>
                                    {option}
                                </Button>
                            </Link>
                            </div>
                        )
                    })}
                </Stack>
            </Box>
        </>
    )
}