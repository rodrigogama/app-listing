import React from 'react';
import PropTypes from 'prop-types';
import { LoadingWrapper, Svg, Circle } from './CircularLoadingStyles';

const CircularLoading = ({ width, ...otherProps }) => (
  <LoadingWrapper width={width} {...otherProps}>
    <Svg viewBox="22 22 44 44">
      <Circle cx={44} cy={44} r={20.2} />
    </Svg>
  </LoadingWrapper>
);

CircularLoading.defaultProps = {
  width: 24
};

CircularLoading.propTypes = {
  width: PropTypes.number
};

export default CircularLoading;
