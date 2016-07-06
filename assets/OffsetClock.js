import moment from 'moment';
import React, { Component, PropTypes } from 'react';

import Clock from './Clock';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default class OffsetClock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.secondsOffset = props.randomSeconds ? getRandomInt(0, 60) : 0;
  }

  updateTimestamp() {
    const timestamp = Date.now();
    this.setState({ timestamp });
  }

  componentWillMount() {
    clearInterval(this.interval);
    this.interval = setInterval(this.updateTimestamp.bind(this), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { offset } = this.props;
    const { timestamp } = this.state;
    const time = moment(timestamp).add(offset, 'minutes').add(this.secondsOffset, 'seconds');

    return <Clock hour={time.hour()} minute={time.minute()} second={time.second()} />;
  }
}

OffsetClock.propTypes = {
  offset: PropTypes.number,
  randomSeconds: PropTypes.bool,
};
