import React from 'react';
import ReactDOM from 'react-dom';
import NoImages from '../components/NoImages';

it('NoImages component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoImages />, div);
  ReactDOM.unmountComponentAtNode(div);
});
