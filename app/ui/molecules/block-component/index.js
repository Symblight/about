import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from 'ui/atoms/Label';
import { Wrapper, Title } from './index.styled';

class BlockComponent extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <Wrapper>
        <Title>
          <Label>{title}</Label>
        </Title>
        {children}
      </Wrapper>
    );
  }
}

BlockComponent.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default BlockComponent;
