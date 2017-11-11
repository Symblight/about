import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { WrapCircle, Line } from './index.styled';

class Circle extends PureComponent {

  static propTypes = {
    now: PropTypes.bool
  }

  render() {
    return (
      <div>
        <WrapCircle />
      </div>
    );
  }
}

export default Circle;
