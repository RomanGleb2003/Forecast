import React, {FC} from 'react';
import {Box} from "@mui/material";

const Hours: FC = () => {
    const numbers = [0, 3, 6, 9, 12, 15, 18, 21]
    return (
        <Box sx={{display: 'flex', gap: '35px', marginLeft: '22px'}}>
            {
                numbers.map(el => {
                    return <Box>{el} :00</Box>
                })
            }
        </Box>
    );
};

export default Hours;