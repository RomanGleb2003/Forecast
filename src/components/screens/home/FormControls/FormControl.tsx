import  React, { FC, useState } from 'react';
import { Button, FormControl, LinearProgress, TextField } from '@mui/material';
import { useAppDispatch } from '@/hooks/redux';
import { weatherAction } from '@/store/reducers/ForecastSlice';
import { useGetCityQuery } from '@/store/forecast/forecast.api';
import DropdownList from '@/components/screens/home/FormControls/List';

interface FormProps {
    setNoCityFound: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

const FormControls: FC<FormProps> = ({ setNoCityFound }) => {
    const dispatch = useAppDispatch();
    const { weather: setWeather } = weatherAction;
    const [query, setQuery] = useState('');
    const { data: cities, isLoading} = useGetCityQuery(query);
    const [showDropdown, setShowDropdown] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        setShowDropdown(true);
    };

    const linkClick = (city: string) => {
        dispatch(setWeather(city));
        setShowDropdown(false);
        if (cities && (cities?.length === 0)) {
            setNoCityFound(true);
        } else {
            setNoCityFound(false);
        }
        setQuery(city)
    };

    return (
        <FormControl sx={{ display: 'flex', flexDirection: 'row', maxWidth: '600px', width: '90%', margin: '5%' }}>
            <TextField
                sx={{ width: '80%' }}
                placeholder="Please enter city..."
                type="text"
                value={query}
                onChange={handleInputChange}
            />
            <Button
                sx={{ width: '20%', height: '50px' }}
                onClick={() => linkClick(cities && Array.isArray(cities) && cities.length > 0 ? cities[0].name : '')}
                color="secondary"
                size="large"
                variant="contained"
            >
                Search
            </Button>
            {isLoading && <LinearProgress color="secondary" />}
            <DropdownList cities={cities} showDropdown={showDropdown} linkClick={linkClick} />
        </FormControl>
    );
};

export default FormControls;