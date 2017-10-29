import React, { Component } from 'react';
import GenericTemplates from '../../templates/GenericTemplate';
import Block from '../../molecules/block-component';
import Button from '../../atoms/Button';

class TestPage extends Component {
  render() {
    return (
      <GenericTemplates>
        <Block title="Кнопка">
          <Button>Test button</Button>
        </Block>
      </GenericTemplates>
    );
  }
}

export default TestPage;
