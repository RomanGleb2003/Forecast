import React, {FC} from 'react';
import {Box} from "@mui/material";
import {useAppSelector} from "@/hooks/redux";
import {RootState} from "@/store/store";

interface CurrentProps {
    current: any
}

const Current: FC<CurrentProps> = ({current}) => {
    const {degrees} = useAppSelector((state: RootState) => state.weather)
    const curren = current?.day
    const sun = current?.astro
    const currentTemp = current?.hour[0]
    const currentText = current?.day?.condition?.text
    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <img style={{width: '100px', height: '100px'}} src={curren?.condition.icon} alt="img"/>
            <Box component='h4' sx={{width: '60%', paddingLeft: '10px', marginBottom: 0}}>
                <Box>{current?.date}</Box>
                {degrees ?
                    <Box sx={{fontSize: '110%', fontWeight: 'bold', marginTop: '5px'}}>
                        {currentTemp?.temp_c}&deg;C
                    </Box>
                    :
                    <Box sx={{fontSize: '110%', fontWeight: 'bold', marginTop: '5px'}}>
                        {currentTemp?.temp_f}&deg;F
                    </Box>
                }
                <Box sx={{fontWeight: '200'}}>{currentText}</Box>
            </Box>
            <Box sx={{width: '20%'}}>
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