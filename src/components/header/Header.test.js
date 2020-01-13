import React from 'react';
import Header from './header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('Header renders as expected', ()=> {
  const wrapper = shallow(<Header/>);
  expect(wrapper).toMatchSnapshot();
})