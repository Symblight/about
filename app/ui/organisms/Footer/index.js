import React, { PureComponent } from 'react';

import Label from 'ui/atoms/Label';

import { Wrapper, Content } from './index.styled';

class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Content>
          <Label>React</Label>
          <Label>Copyright</Label>
          <Label>version 1.1</Label>
        </Content>
      </Wrapper>
    );
  }
}

export default Footer;
