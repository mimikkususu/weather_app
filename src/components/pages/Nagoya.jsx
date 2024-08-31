import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { DispatchContext } from './../providers/DispatchContext';
import { WeatherBox } from './../blocks/WeatherBox';
import { getWeatherByCityName } from './../providers/WeatherAPI';

export const Nagoya = () => {
  const { weatherNagoya } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      if (weatherNagoya !== undefined) {
        return;
      }
      const data = await getWeatherByCityName('Nagoya');
      dispatch({
        type: 'save',
        payload: {
          name: 'weatherNagoya',
          data: data,
        },
      });
    })();
  }, []);

  return weatherNagoya !== undefined && <WeatherBox data={weatherNagoya} />;
};
