import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './index.styled';

class GenericTemplate extends Component {

  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    );
  }
}

GenericTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default GenericTemplate;
