import React from 'react';
import Table from './Table.js';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// let wrapper;

// beforeEach(() => {
//   wrapper = shallow(<Table/>);
// });

it('matches snapshot', ()=> {
  const wrapper = shallow(<Table/>);
  expect(wrapper).toMatchSnapshot();
})

it('renders the correct elements', () => {
  const wrapper = shallow(<Table/>);
  expect(wrapper.find('table')).toHaveLength(1);
});

