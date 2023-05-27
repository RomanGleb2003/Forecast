import React, {FC} from 'react';
import {Box} from "@mui/material";

const Hours: FC = () => {
    const numbers = Array.from({length: 24}, (_, index) => index)
    return (
        <Box sx={{display: 'flex', marginTop: '25px'}}>
            {
                numbers.map(el => {
                    return <Box sx={{width: '30px', marginLeft: '40px'}}>{el}:00</Box>
                })
            }
        </Box>
    );
};

export default Hours;