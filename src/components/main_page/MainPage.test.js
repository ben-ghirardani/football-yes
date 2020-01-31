import React from 'react';
import MainPage from './MainPage.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('Body renders as expected', ()=> {
  const wrapper = shallow(<MainPage/>);
  expect(wrapper).toMatchSnapshot();
})