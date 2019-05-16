import React from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.scss';

const ProgressBar = ({ percentage }) => (
  <div className="progressBar">
    <Filler percentage={percentage} />
  </div>
);

const Filler = ({ percentage }) => (
  <div className="filler" style={{ width: `${percentage}%` }} />
);

const propTypesVal = {
  percentage: PropTypes.number,
};

const defaultPropsValidation = {
  percentage: 0,
};

ProgressBar.propTypes = propTypesVal;
Filler.propTypes = propTypesVal;

ProgressBar.defaultProps = defaultPropsValidation;
Filler.defaultProps = defaultPropsValidation;

export default ProgressBar;
