import React from 'react';
import TableHeader from './TableHeader.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('TableHeader', ()=> {

  let wrapper;

  beforeEach( ()=>{
    wrapper = shallow(<TableHeader/>);
  });

  it('TableHeader renders as expected', ()=> {
    expect(wrapper).toMatchSnapshot();
  })

  it('renders the correct number and type of HTML elements', ()=> {
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('th')).toHaveLength(10);
  });

});