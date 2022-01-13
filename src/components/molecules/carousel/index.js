import { ArrowBackIos, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Grid, Box, Button, IconButton } from '@mui/material'
import { useTheme } from '@mui/system';
import { Deposition } from 'components/atoms';
import { useEffect, useRef, useState } from 'react';

function Carousel(props) {
    const [page, setPage] = useState(0)
    const theme = useTheme()
    const scrollLeft = () => {

        const container = document.getElementById('carousel')
        const item = document.getElementsByClassName('carousel-item')

        let maxPage = Math.round(item.length-(container.clientWidth/item[0].offsetWidth))
        console.log(maxPage, page)

        container.scroll({
            left: item[0].offsetWidth*(page+1),
            behavior: 'smooth'
        })

        if(page == maxPage) return
        setPage(page+1)
    }
    const scrollRight = () => {

        const container = document.getElementById('carousel')
        const item = document.getElementsByClassName('carousel-item')

        let maxPage = Math.round(item.length-(container.clientWidth/item[0].offsetWidth))
        console.log(maxPage, page)

        container.scroll({
            left: item[0].offsetWidth*(page-1),
            behavior: 'smooth'
        })
        
        if(page < 1) return
        setPage(page-1)
    }

    useEffect(() => {
        window.addEventListener('resize', ()=>{
            const container = document.getElementById('carousel')
            container.scroll({left: 0})
            if(page != 0){
                setPage(0)
            }
        })
    }, [])
    return (
        <Box sx={{p: '0px 15px', mr: '16px'}}>
            <IconButton sx={{position: 'absolute', left: 10 ,top: '20%', transform: 'translate(-100%, -50%)', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={scrollRight}>
                <ArrowBackIosNew sx={{color: 'white'}}/>
            </IconButton>
            <Grid id='carousel' container spacing={2} sx={{
                marginTop: '20px',
                flex: 1,
                flexWrap: 'nowrap',
                overflowX: 'scroll',
                overflowY: 'hidden',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar':{
                    display: 'none'
                },
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: 'none',
                marginLeft: '0px',
                ...props.sx
            }}>
                {[0,1,2,3,4].map( (depo, index) => {
                    return(
                        <Grid key={`deposition_${index}`} item sm={6} xs={12} md={6} lg={4} sx={{flexShrink: 0, scrollSnapAlign: 'start'}} className='carousel-item'>
                            <Deposition deposition={depo}/>
                        </Grid> 
                    )
                })}
            </Grid>
            <IconButton sx={{position: 'absolute', right: 10, top: '20%', transform: 'translate(100%, 50%)', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={scrollLeft}>
                <ArrowForwardIos sx={{color: 'white'}}/>
            </IconButton>
        </Box>
    );
}

export default Carousel;