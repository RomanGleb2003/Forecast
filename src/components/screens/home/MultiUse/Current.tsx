import React, {FC} from 'react';
import TempProgress from "@/components/screens/UI/TempProgress";
import {Box} from "@mui/material";

interface CurrentProps {
    current: any
}

const Current: FC<CurrentProps> = ({current}) => {
    const curren = current?.day
    const sun = current?.astro
    const currentTemp = current?.hour[0].temp_c
    return (
        <Box sx={{width: '25%'}}>
            <Box component='h4'
                 sx={{backgroundColor: 'white', color: 'black', width: '60%', paddingLeft: '5px'}}>{current?.date}</Box>
            <img style={{height: '64px'}} src={curren?.condition.icon} alt="img"/>
            {currentTemp && (
                <TempProgress children={currentTemp}/>
            )}
            <Box sx={{border: '1px solid', borderRadius: '7px', width: '85%'}}>
                Sunrise: <span style={{
                fontWeight: 'bold',
            }}>{sun?.sunrise}
            </span>
                <br/>
                Sunset: <span
                style={{fontWeight: 'bold'}}>{sun?.sunset}</span>
            </Box>

        </Box>
    );
};

export default Current;