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
    teamNameEditor: jest.fn().mockReturnValue("Arsenal")
  }
})

describe('Body tests', () => {

  it('matches snapshot', ()=> {
    const wrapper = shallow(<Body {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('renders a table row', ()=> {
    const wrapper = shallow(<Body {...props} />)
    expect(wrapper.find('tr')).toHaveLength(1);
  })

});