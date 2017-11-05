import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled';

class Block extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <Wrapper>{children}</Wrapper>
    );
  }
}

Block.propTypes = {
  children: PropTypes.node.isRequired
};

export default Block;
