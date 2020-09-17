// @flow
import { actionTypes } from './actions';

const initialState = {
  forecast: {
    coord: null,
    weather: [{}],
  },
  isLoading: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.fetch.success:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.fetch.request:
    default:
      return state;
  }
};

export { reducer };
