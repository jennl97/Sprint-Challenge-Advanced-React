import React from 'react';
import * as rtl from '@testing-library/react';
// import 'jest-dom/extend-expect';
import App from './App';

 afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <span>hello world</span>
  );
  console.log(wrapper.debug());
});


it('renders main title', () => {
  const wrapper = rtl.render(<App />);
  // const hasMainTitle = wrapper.queryByText(/sprint challenge/i);
  expect(wrapper.getByText(/sprint challenge/i));
})
