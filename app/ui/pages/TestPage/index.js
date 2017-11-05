import React, { Component } from 'react';
import Block from 'ui/molecules/BlockComponent';
import Button from 'ui/atoms/Button';
import Label from 'ui/atoms/Label';
import WayBlock from 'ui/molecules/WayBlock';
import GenericTemplates from 'ui/templates/GenericTemplate';

class TestPage extends Component {
  render() {
    return (
      <GenericTemplates>
        <Block title="Button">
          <Button>Test button</Button>
        </Block>
        <Block title="Label">
          <Label>Label</Label>
        </Block>
        <Block title="Way Block">
          <WayBlock>Way Block</WayBlock>
        </Block>
      </GenericTemplates>
    );
  }
}

export default TestPage;
