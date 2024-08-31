import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { DispatchContext } from './../providers/DispatchContext';
import { WeatherBox } from './../blocks/WeatherBox';
import { getWeatherByCityName } from './../providers/WeatherAPI';

export const Tokyo = () => {
  const { weatherTokyo } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      if (weatherTokyo !== undefined) {
        return;
      }
      const data = await getWeatherByCityName('Tokyo');
      dispatch({
        type: 'save',
        payload: {
          name: 'weatherTokyo',
          data: data,
        },
      });
    })();
  }, []);

  return weatherTokyo !== undefined && <WeatherBox data={weatherTokyo} />;
};
