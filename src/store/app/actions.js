// @flow
import { standardizeAction } from '../utils';
import api from '../../lib/api';

const prefix: string = 'weather';
const actionTypes = {
  fetch: standardizeAction(`${prefix}/FETCH`),
};

const weatherRequest = payload => ({
  type: actionTypes.fetch.request,
  payload: {},
});

const weatherSuccess = payload => ({
  type: actionTypes.fetch.success,
  payload,
});

const fetchWeather = payload => (dispatch) => {
  dispatch(weatherRequest(payload));

  api.getWeather().then((response) => {
    dispatch(
      weatherSuccess({
        forecast: response,
        isLoading: false,
      }),
    );
  });
};

const actions = {
  fetchWeather,
};

export { actions, actionTypes };
