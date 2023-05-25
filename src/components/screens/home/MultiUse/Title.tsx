import React, {FC} from 'react';
import {Container} from "@mui/material";

const Title: FC = () => {
    return (
        <Container sx={{display: 'flex', justifyContent: 'start', marginLeft: '10px'}}>
            <img style={{width: '200px'}}
                 src="https://sinst.fwdcdn.com/img/weatherImg/b/d300.jpg"
                 alt=""/>
            <h1 style={{color: '#4793ff'}}>Romeo Weather</h1>
        </Container>
    );
};

export default Title;