
import React from 'react';
import { mount, shallow, render } from 'enzyme';

import MyComponent from './signup';


it('should render correctly with no props', () => {
  const component = shallow(<MyComponent />);

  expect(component).toMatchSnapshot();
});

it('should render banner text correctly with given strings', () => {
  const strings = ['SIGN UP PAGE', 'Ingrese su Usuario de facebook:', 'Password:'];
  const component = shallow(<MyComponent list={strings} />);
  expect(component).toMatchSnapshot();
});