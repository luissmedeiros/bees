import { Check, HexagonRounded, HourglassEmpty, MoreHoriz, Update } from "@mui/icons-material";
import { Typography, Stack, Stepper, Step, StepLabel, StepConnector, styled, ListItemAvatar } from "@mui/material";
import { stepConnectorClasses } from "@mui/material";
import { Box, useTheme, width } from "@mui/system";
import { Page } from "components/wrappers";
import { useRef, useState, useEffect } from "react";

const registry_steps = [
    {
        label: 'Pre-Registration',
        optional: 'February - March',
        start_date: 1643684400000,
        end_date: 1648771199000
    },
    {
        label: 'Registration',
        optional: 'April',
        start_date: 1648771200000,
        end_date: 1651363199000
    },
    {
        label: 'Ideathon',
        optional: 'May',
        start_date: 1651363200000,
        end_date: 1654041599000
    },
    {
        label: 'Pitch Mentorship',
        optional: 'June',
        start_date: 1654041600000,
        end_date: 1656633599000
    },
    {
        label: 'Pitch',
        optional: 'July',
        start_date: 1656633600000,
        end_date: 1657324799000
    },
    {
        label: 'Finale Broadcast',
        optional: 'July 9th',
        start_date: 1657324800000,
        end_date: 1657411140000
    }
    ]

export default function Steps({brazil}){
    const theme = useTheme()
    const [windowSize, setWindowSize] = useState(0)
    const eventListener = useRef()

    const activeStep = () => {

        const date = new Date()
        const step = registry_steps.reduce( (pv, cv, idx) => {
            if(cv.start_date < date.getTime() && cv.end_date > date.getTime()){
                return idx;
            }
            return pv;
        }, -1)

        return step;
    }


    const completed = (step) => {

        const date = new Date()
        if(step.start_date < date.getTime() && step.end_date < date.getTime()) return true
        return false
    }

    useEffect( () => {
        setWindowSize(window.innerWidth)

        eventListener.current = window.addEventListener('resize', ()=>{
            setWindowSize(window.innerWidth)
        })

        return () => {
            window.removeEventListener('resize', eventListener.current)
        }
    }, [])


    return(
        <Page minHeight='90vh'>
            <Stack spacing={12} sx={{pt: '40px', pb: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Stack spacing={3}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img height='297px' width={'256px'} src={`/bees-${brazil ? 'brazil' : 'global'}.svg`}/>
                    </Box>
                    <Typography sx={{maxWidth: '876px', fontSize: '19px', textAlign: 'center', color: theme.palette.dark.main}}>
                        {brazil ? 
                            "Our Brazilian edition*, aimed at solving prominent national problems and contributing to fostering entrepreneurial education within Brazil."
                            :
                            "Our Global edition*, aimed at solving prominent problems, contributing to fostering global citizenship and entrepreneurial education."
                        }
                    </Typography>
                </Stack>
                <Box sx={{display: 'flex', alignItems:'center', justifyContent: 'center', [theme.breakpoints.up('sm')]: { width: '100%'}}}>
                    <Stepper activeStep={activeStep()} nonLinear sx={{width: '100%'}} connector={<CustomConector/>} orientation={windowSize > 599 ? 'horizontal' : 'vertical'} alternativeLabel={windowSize > 599 ? true : false}>
                        {registry_steps.map( (item, index) => {

                            const stepProps = {...item.stepProps}
                            const labelProps = {...item.labelProps}
                            labelProps.optional = (<Typography variant='caption' sx={{textAlign:'center', [theme.breakpoints.up('sm')]:  {display: 'block'}}}>{item.optional}</Typography>)

                            return(
                                <Step {...stepProps} key={item.label} completed={completed(item)}>
                                    <StepLabel {...labelProps} sx={{display: 'flex'}} StepIconComponent={StepIcon}>
                                        {item.label}
                                    </StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
                </Box>
            </Stack>
        </Page>
    )
}

const CustomConector = styled(StepConnector)(({ theme }) => ({
    [`&.MuiStepConnector-horizontal`]:{
        top: 20,
        left: 'calc(-50% + 25px)',
        right: 'calc(50% + 25px)',
    },
    [`&.MuiStepConnector-vertical .${stepConnectorClasses.line}`]:{
        borderRadius: '10px',
        width: '0px',
        marginLeft: '6px',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0'
    },
    [`&.MuiStepConnector-horizontal .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: '10px',
        borderTopWidth: '4px'
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.success.main,
      },
    },
  }));

const StepIcon = (props) => {
    const {active, completed} = props
    const theme = useTheme()
    return(
        <Box sx={{display: 'flex', width: 'fit-content', height: 'fit-content', position: 'relative'}}>
            <HexagonRounded sx={{fontSize: '40px', color: active ? theme.palette.primary.main : completed ? theme.palette.success.main : theme.palette.dark.main}}/>
            {active && <MoreHoriz sx={{fontSize: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'white'}}/>}
            {completed && <Check sx={{fontSize: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'white'}}/>}
            {!(completed || active) && <Update sx={{fontSize: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: theme.palette.light.main}}/>}
        </Box>
    )
}
