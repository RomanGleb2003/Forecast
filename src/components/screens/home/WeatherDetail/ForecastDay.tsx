import React, {FC} from 'react';
import {format} from "date-fns";
import {Box, Card} from "@mui/material";

interface DayProps {
    data: any,
    currentState: number,
    setCurrentState: (value: (((prevState: number) => number) | number)) => void
}

const ForecastDay: FC<DayProps> = ({data, currentState, setCurrentState}) => {
    const currentDay = (index: number) => {
        setCurrentState(index)
    }
    return (
        <Box sx={{
            height: '160px',
            display: 'flex',
            overflowY: 'auto',
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
            padding: '0 auto',
            maxWidth: '960px',
            marginBottom: '2px'
        }}>
            {
                data?.forecast.forecastday.map((day: any, index: number) => {
                    let date: Date = new Date(Date.parse(day.date))
                    let month: string = format(date, 'MMMM')
                    return <Card key={index} onClick={() => currentDay(index)}
                                 sx={{
                                     marginLeft: '2px',
                                     borderRadius: '7px',
                                     minWidth: '60px',
                                     padding: '10px',
                                     cursor: 'pointer',
                                     borderBottom: 'none',
                                     backgroundColor: (index !== currentState ? '#59efce' : '#8ff62e')
                                 }}
                    >
                        <Box>{`${date.getDate()}`}</Box>
                        <Box>{month}</Box>
                        <img src={day.day.condition.icon} alt=""/>
                        <Box>min.{day.day.mintemp_c} </Box>
                        <Box> max.{day.day.maxtemp_c}</Box>
                    </Card>
                })
            }
        </Box>
    );
};

export default ForecastDay;