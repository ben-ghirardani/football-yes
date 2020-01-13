import React from 'react';
import Matches from './matches';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('Header renders as expected', ()=> {
  const wrapper = shallow(<Matches/>);
  expect(wrapper).toMatchSnapshot();
})