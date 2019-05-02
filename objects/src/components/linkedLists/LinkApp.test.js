import React from 'react';
import ReactDOM from 'react-dom';
import LinkApp from './LinkApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});