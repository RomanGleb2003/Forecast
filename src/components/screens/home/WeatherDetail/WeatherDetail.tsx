import React, {FC, useState} from 'react';
import {useGetWeatherQuery} from "@/store/forecast/forecast.api";
import {Box, Button, Container, LinearProgress,} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {RootState} from "@/store/store";
import Link from "next/link";
import {weatherAction} from "@/store/reducers/ForecastSlice";
import Title from "@/components/screens/home/MultiUse/Title";
import CityInfo from "@/components/screens/home/MultiUse/CityInfo";
import Forecast from "@/components/screens/home/Forecast/Forecast";
import ForecastDay from "@/components/screens/home/WeatherDetail/ForecastDay";


const WeatherDetail: FC = () => {
        const dispatch = useAppDispatch()
        const {days: setDays} = weatherAction
        const {days} = useAppSelector((state: RootState) => state.weather)
        const {city} = useAppSelector((state: RootState) => state.weather)
        const {data, isLoading} = useGetWeatherQuery({q: city, days: days});
        const [currentState, setCurrentState] = useState<number>(0)
        const daysClick = (days: number) => {
            dispatch(setDays(days))
            setCurrentState(0)
        }
        const curr = data?.forecast.forecastday[currentState]
        return (
            <Box>
                {isLoading ? <LinearProgress sx={{top: -8}} color="secondary"/> :
                    <Container sx={{margin: '0 auto'}}>
                        <Title/>
                        <CityInfo city={data}/>
                        <Button onClick={() => daysClick(7)}>7 days</Button>
                        <Button onClick={() => daysClick(14)}>14 days</Button>
                        <Link href='/'>
                            <Button
                                color="secondary"
                                size="medium"
                                variant="contained"
                            >Home</Button>
                        </Link>
                        <ForecastDay data={data} currentState={currentState} setCurrentState={setCurrentState}/>
                        <Forecast select={curr}/>
                    </Container>}
            </Box>
        );
    };

export default WeatherDetail;