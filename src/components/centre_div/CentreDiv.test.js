import React from 'react';
import CentreDiv from './CentreDiv';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('CentreDiv renders as expected', ()=> {
  const wrapper = shallow(<CentreDiv  />);
  expect(wrapper).toMatchSnapshot();
})