import React from 'react';
import Matches from './matches';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders as expected', ()=> {
  const wrapper = shallow(<Matches/>);
  expect(wrapper).toMatchSnapshot();
})