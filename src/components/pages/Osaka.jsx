import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { DispatchContext } from './../providers/DispatchContext';
import { WeatherBox } from './../blocks/WeatherBox';
import { getWeatherByCityName } from './../providers/WeatherAPI';

export const Osaka = () => {
    const { weatehrOsaka } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    useEffect(()=> {
        (async () => {
            if(weatehrOsaka !== undefined) {
                return;
            }
            
            const data = await getWeatherByCityName("Osaka");
            dispatch({
                type:'save',
                payload : {
                    name : 'weatehrOsaka',
                    data : data,
                }
            });
        })();
    },[]);

    return weatehrOsaka !== undefined && <WeatherBox data = {weatehrOsaka} />

};
