import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { } from './index.styled';

class Block extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div>{children}</div>
    );
  }
}

Block.propTypes = {
  children: PropTypes.node.isRequired
};

export default Block;
