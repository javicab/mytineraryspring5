import React from 'react';
import { mount, shallow, render } from 'enzyme';

import MyComponent from './login';


it('should render correctly with no props', () => {
  const component = shallow(<MyComponent />);

  expect(component).toMatchSnapshot();
});

it('should render banner text correctly with given strings', () => {
  const strings = ['LOGIN PAGE', 'User:', 'Password:'];
  const component = shallow(<MyComponent list={strings} />);
  expect(component).toMatchSnapshot();
});