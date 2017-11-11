import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from 'ui/atoms/Block';
import Circle from 'ui/atoms/Circle';

import { Wrapper, Article, Description } from './index.styled';

class WayBlock extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <Article>
          <Circle />
          <Description>
            <Block>{children}</Block>
          </Description>
        </Article>
      </Wrapper>
    );
  }
}

export default WayBlock;
