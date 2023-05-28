import React, {FC} from 'react';
import {List} from "@mui/material";

interface ListProps{
    cities: any,
    showDropdown: boolean,
    linkClick: (city: string)=> void
}


const DropdownList :FC<ListProps>= ({cities, showDropdown, linkClick}) => {
    return (
        <List sx={{
            position: 'absolute',
            width: '79%',
            maxHeight: 300,
            overflow: 'auto',
            top: '32px',
            color: 'secondary',
            zIndex: 150,
        }}
              component='ul'>
            {showDropdown && cities?.map((city: any) => (
                <button style={{
                    height: 40,
                    backgroundColor: '#fff',
                    width: '100%',
                    color: 'inherit',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    textAlign: 'center'
                }}
                    onClick={() => linkClick(city.name)}
                    key={city.id}
                >{city.name}/{city.country}</button>
            ))}
        </List>
    );
};

export default DropdownList;