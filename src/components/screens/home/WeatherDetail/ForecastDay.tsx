import React, {FC} from 'react';
import {format} from "date-fns";
import {Box, Card} from "@mui/material";

interface DayProps{
    data: object,
    currentState: number,
    setCurrentState: (value: (((prevState: number) => number) | number)) => void
}

const ForecastDay: FC<DayProps> = ({data,currentState, setCurrentState}) => {
    const currentDay = (index: number) => {
        setCurrentState(index)
    }
    return (
        <Box sx={{
            height: '160px',
            display: 'flex',
            overflowY: 'auto',
            padding: '0 auto',
            maxWidth: '960px'
        }}>
            {
                data?.forecast.forecastday.map((day, index) => {
                    let date: Date = new Date(Date.parse(day.date))
                    let month: string = format(date, 'MMMM')
                    return <Card key={index} onClick={() => currentDay(index)}
                                 sx={{
                                     border: "1px solid",
                                     borderRadius: '7px',
                                     minWidth: '60px',
                                     padding: '10px',
                                     cursor: 'pointer',
                                     borderBottom: 'none',
                                     backgroundColor: (index !== currentState ? 'lightBlue' : 'white')
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