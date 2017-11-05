import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from 'ui/organisms/Footer';
import { Wrapper, Content } from './index.styled';

class PageTemplate extends Component {

  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    );
  }
}

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTemplate;
