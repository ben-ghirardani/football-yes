import React from 'react';
import Body from './body';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('Body renders as expected', ()=> {
  const wrapper = shallow(<Body/>);
  expect(wrapper).toMatchSnapshot();
})

// a test for goToFixtures?