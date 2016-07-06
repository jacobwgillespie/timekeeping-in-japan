import React, { PropTypes } from 'react';

import './clock.scss';

export default function Clock({ hour, minute, second }) {
  const hourTransform = `rotate(${Math.floor((hour * 60 + minute) / (12 * 60) * 360)}deg)`;
  const minuteTransform = `rotate(${Math.floor(minute / 60 * 360)}deg)`;
  const secondTransform = `rotate(${Math.floor(second / 60 * 360)}deg)`;

  return (
    <div className="clock">
      <div className="top"></div>
      <div className="right"></div>
      <div className="bottom"></div>
      <div className="left"></div>
      <div className="center"></div>
      <div className="shadow"></div>
      <div className="hour" style={{ transform: minuteTransform }}></div>
      <div className="minute" style={{ transform: hourTransform }}></div>
      <div className="second" style={{ transform: secondTransform }}></div>
    </div>
  );
}

Clock.propTypes = {
  hour: PropTypes.number,
  minute: PropTypes.number,
  second: PropTypes.number,
};
