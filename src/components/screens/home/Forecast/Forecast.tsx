import React from 'react';
import Current from "@/components/screens/home/MultiUse/Current";
import {Box} from "@mui/material";
import Indexes from "@/components/screens/home/Forecast/DetailProps/Indexes";
import Times from "@/components/screens/home/Forecast/DetailProps/Times";
import Hours from "@/components/screens/home/Forecast/DetailProps/Hours";
import InfoForecast from "@/components/screens/home/Forecast/DetailProps/InfoForecast";

const Forecast = ({select}: {select: any}) => {
    return (
        <Box sx={{display: 'flex',height: '350px',maxWidth: '850px', backgroundColor: 'purple', color: 'white', borderRadius: "7px", padding: '5%', overflowY: 'auto'}}>
            <Current current={select}/>
            <Indexes />
            <Box sx={{position: 'relative', top: '5px'}}>
                <Times />
                <Hours />
                <InfoForecast select={select}/>
            </Box>
        </Box>
    );
};

export default Forecast;