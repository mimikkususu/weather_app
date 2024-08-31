import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { DispatchContext } from './../providers/DispatchContext';
import { WeatherBox } from './../blocks/WeatherBox';
import { getWeatherByCityName } from './../providers/WeatherAPI';

export const Hokkaido = () => {
  const { weatherHokkaido } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      if (weatherHokkaido !== undefined) {
        return;
      }
      const data = await getWeatherByCityName('Hokkaido');
      dispatch({
        type: 'save',
        payload: {
          name: 'weatherHokkaido',
          data: data,
        },
      });
    })();
  }, []);

  return weatherHokkaido !== undefined && <WeatherBox data={weatherHokkaido} />;
};
