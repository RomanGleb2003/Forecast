import React, {FC, useState} from 'react';
import {Button, FormControl, LinearProgress, TextField} from "@mui/material";
import {useAppDispatch} from "@/hooks/redux";
import {weatherAction} from "@/store/reducers/ForecastSlice";
import {useGetCityQuery} from "@/store/forecast/forecast.api";
import DropdownList from "@/components/screens/home/FormControls/List";


const FormControls: FC= () => {
    const dispatch = useAppDispatch()
    const {weather: setWeather} = weatherAction
    const [query, setQuery] = useState('')
    const { data: cities, isLoading} = useGetCityQuery(query);
    const [showDropdown, setShowDropdown] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        setShowDropdown(true)
    };

    const linkClick = (city: string) => {
        dispatch(setWeather(city));
        setShowDropdown(false)
    }
    return (
        <FormControl sx={{display: 'flex',marginLeft: '15px', width: '80%', flexFlow: "row wrap",}}>
            <TextField sx={{width: "66%"}} placeholder="Please enter city..." type="text" value={query}
                       onChange={handleInputChange}/>
            <Button sx={{width: "20%", height: '50px'}}
                    type="link"
                    onClick={() => linkClick(query)}
                    color="secondary"
                    size="large"
                    variant="contained">
                Search
            </Button>
            {isLoading && <LinearProgress color="secondary"/>}
            <DropdownList cities={cities} showDropdown={showDropdown} linkClick={linkClick} />

        </FormControl>
    );
};

export default FormControls;