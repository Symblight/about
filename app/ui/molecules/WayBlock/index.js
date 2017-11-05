import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from 'ui/atoms/Block';
import Circle from 'ui/atoms/Circle';

class WayBlock extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Circle />
        <Block>{children}</Block>
      </div>
    );
  }
}

WayBlock.propTypes = {
  children: PropTypes.node.isRequired
};

export default WayBlock;
