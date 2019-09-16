import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

 afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders main title', () => {
  const wrapper = rtl.render(<App />);
  const hasMainTitle = wrapper.queryByText(/sprint challenge/i);
  expect(hasMainTitle).toBeInTheDocument();
})
