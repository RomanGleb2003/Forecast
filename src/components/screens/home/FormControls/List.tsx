import React, {FC} from 'react';
import {List} from "@mui/material";

interface ListProps{
    cities: object,
    showDropdown: boolean,
    linkClick: (city: string)=> void
}

const DropdownList :FC<ListProps>= ({cities, showDropdown, linkClick}) => {
    return (
        <List sx={{
            position: 'absolute',
            width: '50%',
            maxHeight: 300,
            overflow: 'auto',
            paddingRight: 14,
            top: 48,
            color: 'secondary'
        }}
              component='ul'>
            {showDropdown && cities?.map((city, index) => (
                <li style={{
                    height: 30,
                    backgroundColor: 'white',
                    color: 'inherit',
                    display: "flex",
                    border: '1px solid',
                    textDecoration: 'none'
                }}
                    onClick={() => linkClick(city.name)}
                    key={index}
                >{city.name}/{city.country}</li>
            ))}
        </List>
    );
};

export default DropdownList;