import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { WrapCircle, Line } from './index.styled';

class Circle extends PureComponent {
  render() {
    const { now } = this.props;

    return (
      <div >
  
        <WrapCircle />
      </div>
    );
  }
}

Circle.propTypes = {
  now: PropTypes.bool
};

export default Circle;
