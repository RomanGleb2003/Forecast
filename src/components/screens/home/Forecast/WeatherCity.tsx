import React, {FC, useState} from 'react';
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
    const [noCityFound, setNoCityFound] = useState(false);
    const linkClick = (city: string) => {
        dispatch(setWeather(city));
    }

    return (
        <Container>
            <Title/>
            <FormControls setNoCityFound={setNoCityFound}/>
            {noCityFound && <Box component='h3' sx={{marginLeft: '5%', color: '#ee0505'}}>NO CITY!</Box>}
            {!noCityFound && data &&
                <Container>
                    <Box sx={{display: 'flex',maxWidth: '600px',margin: '5% 0 0 5%', width: '95%', gap: '3%'}}>
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