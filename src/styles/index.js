import { createTheme, keyframes, responsiveFontSizes } from "@mui/material";

//colors
const colors = createTheme({
    palette:{
        primary: {
            main: '#FEA224'
        },
        light:{
            main: '#fff'
        },
        dark:{
            main: '#282828'
        }
    }
})

//Animations
const activeNavbarHover = keyframes`
    0% {
        transform: scaleX(1)
    }
    50% {
        transform: scaleX(0.95)
    }
    100% {
        transform: scaleX(1)
    }
`

const animations = {
    activeNavbarHover,
}

const font = "'Montserrat'"

let theme = createTheme(colors, {
    typography: {
        h1:{
            fontSize: '2.7vw',
            [colors.breakpoints.down('md')]: {fontSize: '1.8rem !important'}
        },
        h2:{
            fontSize: '2.3vw',
            [colors.breakpoints.down('md')]: {fontSize: '1.6rem !important'}
        },
        h3:{
            fontSize: '1.9vw',
            [colors.breakpoints.down('md')]: {fontSize: '1.4rem !important'}
        },
        h4:{
            fontSize: '1.6vw',
            [colors.breakpoints.down('md')]: {fontSize: '1rem !important'}
        }
    },
    components:{
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Montserrat'
            },
            styleOverrides:{
                root:{
                    [colors.breakpoints.down('md')]: {textAlign: 'center', alignSelf: 'center'} 
                },
            }
        },
        MuiStack:{
            styleOverrides:{
                root:{
                    [colors.breakpoints.down('md')]: {textAlign: 'center', alignSelf: 'center'} 
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body:{
                    margin: 0,
                },
                q:{
                    quotes: `"“" "”" "‘" "’"`
                },
                a:{
                    textDecoration: 'none'
                },
                '&::-webkit-scrollbar':{
                    backgroundColor: '#ffffff50',
                    width: '12px',
                },
                '&::-webkit-scrollbar-thumb':{
                    backgroundColor: '#00000060',
                    borderRadius: '10px',
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    textTransform: 'none'
                }
            },
            variants: [
                {
                    props: { variant: 'navbar'},
                    style: {
                        padding: '5px 2px',
                        fontWeight: '500',
                        fontSize: 17,
                        '&:hover:before':{
                            transform: 'scaleX(1)',
                            transition: '.2s',
                        },
                        '&:hover':{
                            backgroundColor: 'transparent',
                        },
                        '&:before':{
                            transition: '.2s',
                            content: '""',
                            position: 'absolute',
                            bottom: '1px',
                            height: '2px',
                            width: '18px',
                            borderRadius: '10px',
                            transform: 'scaleX(0)',
                            backgroundColor: colors.palette.primary.main
                        }
                    }
                },
                {
                    props: { variant: 'navbar active'},
                    style:{
                        padding: '5px 2px',
                        fontWeight: '500',
                        fontSize: 17,
                        '&:hover':{
                            backgroundColor: 'transparent',
                        },
                        '&:hover:before':{
                            transform: 'scaleX(0.95)',
                            transition: '.2s'
                        },
                        '&:before':{
                            content: '""',
                            transition: '.2s',
                            position: 'absolute',
                            bottom: '1px',
                            height: '2px',
                            width: '100%',
                            borderRadius: '10px',
                            transform: 'scaleX(1)',
                            backgroundColor: colors.palette.primary.main
                        }
                    }
                },
                {
                    props: { variant: 'multiple item'},
                    style:{
                        color: 'black',
                        padding: '5px 0px',
                        '&:hover':{
                            backgroundColor: 'transparent',
                            color: colors.palette.primary.main
                        }
                    }
                },
                {
                    props: {variant: 'action dark'},
                    style:{
                        border: `2px solid ${colors.palette.primary.main}`,
                        borderRadius: '20px',
                        color: '#fff',
                        '&:hover':{
                            backgroundColor: colors.palette.primary.main,
                            color: '#000'
                        }
                    }
                },
                {
                    props: {variant: 'action light'},
                    style:{
                        borderRadius: '20px',
                        alignSelf: 'flex-start', 
                        backgroundColor: colors.palette.light.main, 
                        color: colors.palette.dark.main,
                        border: `2px solid ${colors.palette.dark.main}`, 
                        '&:hover': {
                            backgroundColor: colors.palette.dark.main, 
                            color: colors.palette.light.main
                        }
                    }
                },
                {
                    props: {variant: 'link'},
                    style:{
                        textDecoration: 'underline', 
                        color: '#676767', 
                        '&:hover': {
                            backgroundColor: 'transparent', 
                            textDecoration: 'underline', 
                            color: '#ffffff20'
                        }
                    }
                }
            ]
        }
    },
});

// Navigation
const TheCompetition = {
    title: 'The Competition',
    multiple: true,
    options: ['Home', "Global", "Brazil"],
    route: '/competition'
}

const LatestNews = {
    title: 'Latest News',
    route: '/latest-news'
}

const BeAPartner = {
    title: 'Be a Partner',
    route: '/be-a-partner'
}

const AboutUs = {
    title: 'About Us',
    route: '/about-us'
}

const navigation = [TheCompetition, LatestNews, BeAPartner, AboutUs]

export {
    theme,
    navigation,
    animations
}