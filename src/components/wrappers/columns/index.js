import { Grid } from "@mui/material";
import { Page } from "..";
import {Children} from 'react';

function Columns(props) {
    const childrenArray = Children.toArray(props.children)
    const {xs = 12, sm = 12, md = 6, lg = props.children.length >= 3 ? 4 : 6 } = props.overrideWrap || {}
    return (
        <Page minHeight='0px' bgColor={props.bgColor}>
            <Grid container spacing={props.spacing ? props.spacing : 1} sx={{pt: '40px', pb: '40px'}} wrap={props.wrap ? props.wrap : undefined}>
                {Children.map(childrenArray, (child, index) => {
                    return(
                        <Grid item sm={sm} xs={xs} md={md} lg={lg}>
                            {child}
                        </Grid>
                    )
                })}
            </Grid>
        </Page>
    );
}

export default Columns;