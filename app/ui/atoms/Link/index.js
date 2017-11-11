import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Highlight } from './index.styled';

class Link extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <span>
        <Highlight>{children}</Highlight>
      </span>
    );
  }
}

export default Link;
