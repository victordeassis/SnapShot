import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../components/Container';
import PhotoContextProvider from '../context/PhotoContext';

it('Container component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PhotoContextProvider>
      <Container searchTerm={'test'} />
    </PhotoContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
