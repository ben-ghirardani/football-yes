import React from 'react';
import Body from './Body.js';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Body/>);
})

describe('Body tests', () => {

  it('Body renders as expected', ()=> {
    expect(wrapper).toMatchSnapshot();
  })

  it('renders a table row', ()=> {
    expect(wrapper.find('tr').length).toEqual(1);
  })

});

// it('List renders table', () => {
//   expect(list.find('table').length).toEqual(1);
// });

// it('Class of rendered table', () => {
//   expect(list.find('.myClass').length).toEqual(1);
// });

// const wrapper = shallow(<MyComponent />);
// expect(wrapper.find('.foo')).to.have.lengthOf(1);
// expect(wrapper.find('.bar')).to.have.lengthOf(3);

// // compound selector
// expect(wrapper.find('div.some-class')).to.have.length(3);

  // expect(list.find('table').length).toEqual(1);
