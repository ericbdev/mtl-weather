import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-feather/dist/icons/loader';
import { actions } from '../../store/app/actions';
import Header from '../Header';
import Forecast from '../Forecast';
import { propTypes as forecastProps } from '../Forecast/types';
import { LayoutRow, LayoutColumn } from '../Layout';
import classes from './style.scss';

class App extends React.PureComponent {
  componentDidMount = () => {
    this.props.fetchWeather();
  };

  render() {
    const { forecast, isLoading } = this.props;

    if (isLoading) {
      return <Loader />;
    }
    // https://openweathermap.org/weather-conditions
    const { coord, weather } = forecast;
    return (
      <div className={classes.root}>
        <Header />
        <main className={classes.main}>
          <Forecast forecast={forecast} />
        </main>
      </div>
    );
  }
}

App.defaultProps = {
  isLoading: true,
  forecast: {
    coord: {},
    weather: [],
  },
};

App.propTypes = {
  isLoading: PropTypes.bool,
  forecast: PropTypes.any,
  fetchWeather: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  forecast: state.app.forecast,
  isLoading: state.app.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: () => dispatch(actions.fetchWeather()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
