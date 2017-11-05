import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from 'ui/atoms/Block';

import { Border } from './index.styled';

class BlockBorder extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <Border>
        <Block>{children}</Block>
      </Border>
    );
  }
}

BlockBorder.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlockBorder;
