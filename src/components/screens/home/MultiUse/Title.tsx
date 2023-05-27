import React, {FC} from 'react';
import {Container} from "@mui/material";

const Title: FC = () => {
    return (
        <Container sx={{display: 'flex', justifyContent: 'start', marginLeft: '10px'}}>
            <img style={{maxWidth: '200px', width: '50%', height: '20%', marginLeft: '20px'}}
                 src="https://sinst.fwdcdn.com/img/weatherImg/b/d300.jpg"
                 alt=""/>
            <h1 style={{color: '#4793ff', margin: '5%'}}>Romeo Weather</h1>
        </Container>
    );
};

export default Title;