import { Stack, IconButton} from '@mui/material'
import { Mail, Phone, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material'

function Social(props) {
    return (
        <Stack direction={props.direction ? props.direction : 'row'}>
            <IconButton sx={{alignSelf: 'center'}} href='mailto:info@beesglobal.co' target={'_blank'}>
                <Mail sx={{color: props.color ? props.color : undefined}}/>
            </IconButton>
            <IconButton sx={{alignSelf: 'center'}} href={"tel:+55-21-96486-2673"} target={'_blank'}>
                <Phone sx={{color: props.color ? props.color : undefined}}/>
            </IconButton>
            <IconButton sx={{alignSelf: 'center'}} href={'https://www.instagram.com/bees_global/'} target={'_blank'}>
                <Instagram sx={{color: props.color ? props.color : undefined}}/>
            </IconButton>
            <IconButton sx={{alignSelf: 'center'}} href={'https://www.linkedin.com/company/beesglobal/'} target={'_blank'}>
                <LinkedIn sx={{color: props.color ? props.color : undefined}}/>
            </IconButton>
            <IconButton sx={{alignSelf: 'center'}} target={'_blank'} href={'https://api.whatsapp.com/send?phone=5521964862673&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20BEES'}>
                <WhatsApp sx={{color: props.color ? props.color : undefined}}/>
            </IconButton>
        </Stack>
    );
}

export default Social;