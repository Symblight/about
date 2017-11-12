import React, { PureComponent } from 'react';

const withEducation = (Component) => {
  return class AsyncComponent extends PureComponent {
    render() {
      return (
        <Component />
      );
    }
  };
};

export default withEducation;
