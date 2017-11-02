import React, { Component } from 'react';
import Block from 'ui/molecules/block-component';
import Button from 'ui/atoms/Button';
import Label from 'ui/atoms/Label';
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
      </GenericTemplates>
    );
  }
}

export default TestPage;
