import React, {FC} from 'react';
import {Box} from "@mui/material";

const Indexes: FC = () => {
    return (
        <Box sx={{lineHeight: 'normal',minWidth: '80px',padding: '5px',  fontSize: 'auto', width: '20%',display: 'flex',height: '100px', flexDirection: 'column', gap: "10px", marginTop: '110px'}}>
            <Box>Temperature</Box>
            <Box>feels like</Box>
            <Box>pressure, mm</Box>
            <Box>Wind, km/h</Box>
            <Box>Probability <br/>
                precipitation, %</Box>
        </Box>
    );
};

export default Indexes;