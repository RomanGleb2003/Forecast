import React from 'react';
import {NextPage} from "next";
import WeatherDetail from "@/components/screens/home/WeatherDetail/WeatherDetail";

const myPage: NextPage = () => {
    return (
        <div>
            <WeatherDetail />
        </div>
    );
};

    export default myPage;