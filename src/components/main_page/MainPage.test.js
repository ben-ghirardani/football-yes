import React from 'react';
import MainPage from './MainPage.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('matches snapshot', ()=> {
  const wrapper = shallow(<MainPage/>);
  expect(wrapper).toMatchSnapshot();
})

it('renders a div with classsNAme main-page', () => {
  const wrapper = shallow(<MainPage/>);
  expect(wrapper.find('div')).toHaveLength(1);
  expect(wrapper.find('.main-page')).toHaveLength(1);
});