import React, { Component } from 'react';
import Block from 'ui/molecules/block-component';
import Button from 'ui/atoms/Button';
import GenericTemplates from 'ui/templates/GenericTemplate';

class TestPage extends Component {
  render() {
    return (
      <GenericTemplates>
        <Block title="Button">
          <Button>Test button</Button>
        </Block>
      </GenericTemplates>
    );
  }
}

export default TestPage;
