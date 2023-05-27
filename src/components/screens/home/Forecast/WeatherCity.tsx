import React, {FC} from 'react';
import {Box, Button, Container} from '@mui/material';
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {weatherAction} from "@/store/reducers/ForecastSlice";
import {useGetCurrentQuery,} from "@/store/forecast/forecast.api";
import {RootState} from "@/store/store";
import FormControls from "@/components/screens/home/FormControls/FormControl";
import CityInfo from "@/components/screens/home/MultiUse/CityInfo";
import Forecast from "@/components/screens/home/Forecast/Forecast";
import Title from "@/components/screens/home/MultiUse/Title";

const WeatherCity: FC = () => {
    const dispatch = useAppDispatch()
    const {city} = useAppSelector((state: RootState) => state.weather)
    const {weather: setWeather} = weatherAction
    const {data} = useGetCurrentQuery({q: city})
    const linkClick = (city: string) => {
        dispatch(setWeather(city));
    }
    return (
        <Container>
            <Title/>
            <FormControls/>
            {data &&
                <Container>
                    <Box sx={{display: 'flex', margin: '0 5% 0 5%'}}>
                        <CityInfo city={data}/>
                        <Link href='/detailPage'>
                            <Button color="secondary"
                                    size="small"
                                    variant="contained"
                                    onClick={() => linkClick(city)}>
                                Detail Weather
                            </Button>
                        </Link>
                    </Box>
                    <Forecast select={data?.forecast?.forecastday[0]}/>
                </Container>
            }
        </Container>
    );
};

export default WeatherCity;