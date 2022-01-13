import { Grid, Typography } from "@mui/material";
import { Page } from "..";
import {Children} from 'react';

function Columns(props) {
    const childrenArray = Children.toArray(props.children)
    const {xs = 12, sm = 12, md = 6, lg = props.children.length >= 3 ? 4 : 6 } = props.overrideWrap || {}
    return (
        <Page minHeight='0px' bgColor={props.bgColor}>
            {props.title && 
                <Typography sx={{alignSelf: 'center', fontSize: '32px', mt: '40px'}}>
                    {props.title}
                </Typography>
            }
            <Grid container spacing={props.spacing ? props.spacing : 1} sx={{pt: '40px', pb: '40px'}} wrap={props.wrap ? props.wrap : undefined}>
                {Children.map(childrenArray, (child, index) => {
                    return(
                        <Grid item sm={sm} xs={xs} md={md} lg={lg}>
                            {child}
                        </Grid>
                    )
                })}
            </Grid>
            {props.footer && 
                <Typography sx={{alignSelf: 'center', fontSize: '32px', mb: '40px'}}>
                    {props.footer}
                </Typography>
            }
        </Page>
    );
}

export default Columns;