import React from 'react';
import ReactDOM from 'react-dom';
import WorldApp from './WorldApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorldApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});