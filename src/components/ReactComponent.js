import React from 'react';

const ReactComponent = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
  </div>
);

ReactComponent.defaultProps = {
  title: 'FCC Pomodoro Clock',
  subtitle: 'Free Code Camp'
};

export default ReactComponent;