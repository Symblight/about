import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { } from './index.styled';

class Link extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <span>
        {children}
      </span>
    );
  }
}

Link.propTypes = {
  children: PropTypes.node.isRequired
};

export default Link;
