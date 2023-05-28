import React, {useState} from 'react';
import Current from "@/components/screens/home/MultiUse/Current";
import {Box, Button, Paper} from "@mui/material";
import Indexes from "@/components/screens/home/Forecast/DetailProps/Indexes";
import Hours from "@/components/screens/home/Forecast/DetailProps/Hours";
import InfoForecast from "@/components/screens/home/Forecast/DetailProps/InfoForecast";
import {useDispatch} from "react-redux";
import {weatherAction} from "@/store/reducers/ForecastSlice";
import {useAppSelector} from "@/hooks/redux";
import {RootState} from "@/store/store";

const Forecast = ({select}: { select: any }) => {
    const dispatch = useDispatch()
    const {degrees: setDegrees} = weatherAction
    const {degrees} = useAppSelector((state: RootState) => state.weather)
    return (
        <Paper
            style={{
                backgroundImage: `url(https://cdn.weatherapi.com/weather-widget/img/weatherapi-backgrounds/4_widget4.png)`
            }}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '450px',
                maxWidth: '730px',
                color: 'white',
                borderRadius: "7px",
                padding: '5%',
                overflowX: 'hidden',
            }}
        >
            <Box sx={{display: 'flex', gap: '5px'}}>
                <Button
                    sx={{backgroundColor: degrees ? 'none' : '#c608d3'}}
                    variant="contained"
                    onClick={() => dispatch(setDegrees(true))}>
                    &deg;C
                </Button>
                <Button
                    sx={{backgroundColor: !degrees ? 'none' : '#c608d3'}}
                    variant="contained"
                    onClick={() => dispatch(setDegrees(false))}>
                    &deg;F
                </Button>
            </Box>
            <Current current={select}/>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Indexes/>
                <Box sx={{
                    overflowX: 'auto', marginLeft: '5px', position: 'relative', top: '5px', overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'purple',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'lightGray',
                        borderRadius: '4px',
                    },
                }}>
                    <Hours/>
                    <InfoForecast select={select}/>
                </Box>
            </Box>
        </Paper>
    );
};

export default Forecast;