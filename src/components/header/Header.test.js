import React from 'react';
import Header from './header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header/>);
});

describe('Header tests', () => {

  it('Header renders as expected', ()=> {
    expect(wrapper).toMatchSnapshot();
  })

  it('should return a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should say Football? Yes!', () => {
    expect(wrapper.find('div').text()).toEqual('Football? Yes!');
  });

});