import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from 'ui/atoms/Block';
import Circle from 'ui/atoms/Circle';

import { Wrapper } from './index.styled';

class WayBlock extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <div>
          <Circle />
        </div>
        <Block>{children}</Block>
      </Wrapper>
    );
  }
}

WayBlock.propTypes = {
  children: PropTypes.node.isRequired
};

export default WayBlock;
