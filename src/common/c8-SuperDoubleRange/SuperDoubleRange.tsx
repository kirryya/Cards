import Box from '@mui/material/Box';
import React from 'react'
import Slider from "@mui/material/Slider";

type SuperDoubleRangePropsType = {
    handleChange: (event: Event, newValue: number | number[]) => void
    value: [number, number]
}

export function SuperDoubleRange(props: SuperDoubleRangePropsType) {

    return (
        <Box sx={{width: 200}}>
            <Slider
                value={props.value}
                onChange={props.handleChange}
            />
        </Box>
    );

}
