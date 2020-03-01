import React from 'react';
import Body from './Body.js';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let props;

beforeEach(() => {
  props = {
    position: 1,
    team: "Arsenal",
    id: 456,
    played: 10,
    won: 5,
    draw: 3,
    lost: 2,
    gf: 20,
    ga: 10,
    gd: 10,
    points: 18,
    teamNameEditor: jest.fn().mockReturnValue("Arsenal"),
    prepFixtureData: jest.fn()

  }
})

describe('Body tests', () => {

  it('matches snapshot', ()=> {
    const wrapper = shallow(<Body {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('renders correct number of <tr/> and <td/>', ()=> {
    const wrapper = shallow(<Body {...props} />)
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('td')).toHaveLength(10);
  })

  it('displays correct data', () => {
    const wrapper = shallow(<Body {...props} />);
    expect(wrapper.find('.position').text()).toBe('1');
    expect(wrapper.find('.link-to-fixtures').text()).toBe('Arsenal');
    expect(wrapper.find('.played').text()).toBe('10');
    expect(wrapper.find('.won').text()).toBe('5');
    expect(wrapper.find('.draw').text()).toBe('3');
    expect(wrapper.find('.lost').text()).toBe('2');
    expect(wrapper.find('.gf').text()).toBe('20');
    expect(wrapper.find('.ga').text()).toBe('10');
    expect(wrapper.find('.gd').text()).toBe('10');
    expect(wrapper.find('.points').text()).toBe('18');
  });

});