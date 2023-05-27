import React, {FC} from 'react';
import Link from "next/link";
import {Box, Typography} from "@mui/material";

interface CityProps{
    city: any
}

const CityInfo:FC<CityProps> = ({city}) => {
    return (
        <Box style={{color: '#4793ff'}} sx={{
            display: 'flex',
            width: '100%',
            maxWidth: '600px',
            borderTopRightRadius: '7px',
            borderTopLeftRadius: '7px'
        }}>
            {!city ? (<><h1>No Information</h1><Link href='/src/pages'>Search</Link></>) : (
                <Box sx={{textShadow: '3px 2px 3px pink'}}>
                    <Typography variant='h4'>
                        City/Town: {city?.location?.name}
                    </Typography>
                    <h3>Country: {city?.location?.country}</h3>
                </Box>
            )}
        </Box>
    );
};

export default CityInfo;