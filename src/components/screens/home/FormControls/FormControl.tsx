import React, {FC, useState} from 'react';
import {FormControl, LinearProgress, TextField} from "@mui/material";
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
        <FormControl sx={{maxWidth: '600px', width: '90%',margin: '5%'}}>
            <TextField sx={{width: "100%", boxShadow: 3 }} placeholder="Please enter city..." type="text" value={query}
                       onChange={handleInputChange}/>
            {isLoading && <LinearProgress color="secondary"/>}
            <DropdownList cities={cities} showDropdown={showDropdown} linkClick={linkClick} />

        </FormControl>
    );
};

export default FormControls;