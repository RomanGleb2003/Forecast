import React, {FC} from 'react';
import {Box, CircularProgress} from "@mui/material";

interface PropsTemp{
    children: number
}

const TempProgress: FC<PropsTemp> = ({children}) => {
    return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                    variant="determinate"
                    value={children * 2}
                    sx={{
                        color: children > 30 ? 'red' : children > 15 ? 'orange' : 'lightGreen',
                        '& .MuiCircularProgress-circle': {
                            strokeLinecap: 'round',
                        },
                    }}
                    size={55}
                    thickness={3.5}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}
                >
                    <Box sx={{ fontSize: 15, fontWeight: 'bold' }}>{children}&deg;</Box>
                    <Box sx={{ fontSize: "50%", color: 'white' }}>Temperature</Box>
                </Box>
            </Box>
    );
};

export default TempProgress;