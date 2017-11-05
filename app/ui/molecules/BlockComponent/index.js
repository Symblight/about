import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Label from 'ui/atoms/Label';
import { Wrapper, Title, Content } from './index.styled';

class BlockComponent extends PureComponent {
  render() {
    const { children, title } = this.props;
    return (
      <Wrapper>
        <Title>
          <Label>{title}</Label>
        </Title>
        <Content>{children}</Content>
      </Wrapper>
    );
  }
}

BlockComponent.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default BlockComponent;
