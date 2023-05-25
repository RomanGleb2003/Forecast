import React from 'react';
import {Box, IconButton} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Hour} from "@/store/forecast/forecast.types";

const InfoForecast = ({select}: {select: any}) => {
    const hour: Hour[] = select?.hour
    const numbers = [0, 3, 6, 9, 12, 15, 18, 21]
    const filterHour = hour?.filter((el, i) => numbers.includes(i))
    const date = new Date()
    date.setHours(date.getHours() );
    const getDate = date.toString().split('').slice(15,18).join('')
    return (
        <Box sx={{display: 'flex'}}>
            {filterHour?.map(item => {
                return <Box sx={{
                    backgroundColor: (item.time.split('').slice(10, 13).join('') < getDate ? 'lightGreen' : 'yellow'),
                    width: '50px',
                    paddingTop: '4px',
                    color: 'black',
                    paddingLeft: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    paddingBottom: '10px',
                    marginLeft: '15px'
                }}>
                    <Box><img style={{width: '70%'}} src={item.condition.icon} alt=""/></Box>
                    <Box>{Math.round(item.temp_c)}&deg;</Box>
                    <Box>{item.feelslike_c}</Box>
                    <Box>{item.pressure_mb}</Box>
                    <Box sx={{display: "flex", flexDirection: 'row',  height: '15px', border: '1px solid', borderRadius: '7px',}}><IconButton sx={{ transform: `rotate(${item.wind_degree}deg)` }}>
                        <ArrowForwardIcon sx={{width: '10px'}}/>
                    </IconButton><Box sx={{fontSize: '12px'}}>{item.wind_kph}</Box>
                    </Box>
                    <Box>{item.pressure_in}</Box>
                </Box>
            })}
        </Box>
    );
};

export default InfoForecast;