import React, { Component } from 'react';

import { Wrapper, Content, PhotoWrap, Hero, Title } from './index.styled';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <PhotoWrap>Photo</PhotoWrap>
          <Hero>
            <Title>Hey,  Im Web developer</Title>
          </Hero>
        </Content>
      </Wrapper>
    );
  }
}

export default Header;
