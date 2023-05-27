import React from 'react';
import {Box, IconButton} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Hour} from "@/store/forecast/forecast.types";
import {useAppSelector} from "@/hooks/redux";
import {RootState} from "@/store/store";

const InfoForecast = ({select}: { select: any }) => {
    const {degrees} = useAppSelector((state: RootState) => state.weather)
    const hour: Hour[] = select?.hour
    const date = new Date()
    date.setHours(date.getHours());
    return (
        <Box sx={{display: 'flex'}}>
            {hour?.map(item => {
                return <Box sx={{
                    width: '50px',
                    paddingTop: '7px',
                    paddingLeft: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    paddingBottom: '10px',
                    marginLeft: '15px'
                }}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <img style={{width: '45px'}}
                             src={item.condition.icon} alt=""/>
                    </Box>
                    {degrees ?
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>{Math.round(item.temp_c)}&deg;C</Box>
                        :
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>{Math.round(item.temp_f)}&deg;F</Box>
                    }
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>{item.feelslike_c}</Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>{item.pressure_mb}</Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'row',
                        height: '15px',
                        border: '1px solid',
                        borderRadius: '7px',
                        width: '53px'
                    }}>
                        <IconButton sx={{transform: `rotate(${item.wind_degree}deg)`, color: '#fff'}}>
                            <ArrowForwardIcon sx={{width: '10px', color: 'blue'}}/>
                        </IconButton>
                        <Box sx={{fontSize: '12px'}}>{item.wind_kph}</Box>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        {item.pressure_in}
                        <span>%</span>
                    </Box>
                </Box>
            })}
        </Box>
    );
};

export default InfoForecast;