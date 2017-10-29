import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title } from './index.styled';

class BlockComponent extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <Wrapper>
        <Title>{title}</Title>
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
