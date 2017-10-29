import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LabelStyled } from './index.styled';

class Label extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <LabelStyled>
        {children}
      </LabelStyled>
    );
  }
}

Label.propTypes = {
  children: PropTypes.node.isRequired
};

export default Label;
