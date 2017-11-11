import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from 'ui/atoms/Block';
import Circle from 'ui/atoms/Circle';

import { Wrapper } from './index.styled';

class WayBlock extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

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

export default WayBlock;
