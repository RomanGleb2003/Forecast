import React, {FC} from 'react';
import {Box} from "@mui/material";

const Times:FC = () => {
    return (
        <Box sx={{display: 'flex', gap: '103px', paddingLeft: '45px', paddingBottom: '15px'}}>
            <Box>Night</Box>
            <Box>Morning</Box>
            <Box>Day</Box>
            <Box>Evening</Box>
        </Box>
    );
};

export default Times;