import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from './index.styled';

class FlatButton extends PureComponent {

  render() {
    const { children } = this.props;
    return (
      <Button>{children}</Button>
    );
  }
}

FlatButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default FlatButton;
