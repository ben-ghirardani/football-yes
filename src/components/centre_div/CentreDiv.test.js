import React from 'react';
import CentreDiv from './CentreDiv';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('matches snapshot', ()=> {
  const wrapper = shallow(<CentreDiv/>);
  expect(wrapper).toMatchSnapshot();
})

it('renders two routes', () => {
  const wrapper = shallow(<CentreDiv/>);
  expect(wrapper.find('Route')).toHaveLength(2);
});