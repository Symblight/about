import React, { Component } from 'react';

import Label from 'ui/atoms/Label';
import Link from 'ui/atoms/Link';

import PrimaryButton from 'ui/molecules/PrimaryButton';
import Block from 'ui/molecules/BlockComponent';
import WayBlock from 'ui/molecules/WayBlock';
import BlockBorder from 'ui/molecules/BlockBorder';
import TextFieldButton from 'ui/molecules/TextFieldButton';
import PageTemplates from 'ui/templates/PageTemplate';

class TestPage extends Component {
  render() {
    return (
      <PageTemplates>
        <Block title="Primary button">
          <PrimaryButton>Primary button</PrimaryButton>
        </Block>
        <Block title="Label">
          <Label>Label</Label>
        </Block>
        <Block title="Way Block">
          <WayBlock title="My way">Well, My name is Alexey and I am Web developer. I finished college in 2016 and now I work in a SENLA</WayBlock>
        </Block>
        <Block title="Block Border">
          <BlockBorder>Block border</BlockBorder>
        </Block>
        <Block title="Link">
          <Link>Link!</Link>
        </Block>
        <Block title="Text field button">
          <TextFieldButton button="send" placeholder="" />
        </Block>
      </PageTemplates>
    );
  }
}

export default TestPage;
