import React from 'react';
import Loading from './Loading.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('matches snapshot', ()=> {
  const wrapper = shallow(<Loading/>);
  expect(wrapper).toMatchSnapshot();
})

it('renders the correct html', () => {
  const wrapper = shallow(<Loading/>);
  expect(wrapper.find('.loading')).toHaveLength(1);
  expect(wrapper.find('.central-column')).toHaveLength(1);
  expect(wrapper.find('.message')).toHaveLength(1);
});