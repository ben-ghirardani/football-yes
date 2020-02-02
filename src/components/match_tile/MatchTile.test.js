import React from 'react';
import MatchTile from './MatchTile';
import TeamNameEditor from '../team_name_editor/TeamNameEditor.js'
jest.mock('../team_name_editor/TeamNameEditor.js');
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let props;

beforeEach(() => {
  TeamNameEditor.mockClear();
  TeamNameEditor.mockReturnValueOnce("Arsenal").mockReturnValueOnce("Everton");
  props = {
    key: 159,
    date: "11 Aug 2019",
    homeTeam: "Arsenal",
    homeHalfTimeScore: 1,
    homeFullTimeScore: 3,
    awayTeam: "Everton",
    awayHalfTimeScore: 0,
    awayFullTimeScore: 1
  }
});

it('MatchTile calls TeamNameEditor twice', ()=> {
  const wrapper = shallow(<MatchTile {...props} />);
  expect(TeamNameEditor).toHaveBeenCalledTimes(2);
})

it('component displays as expected', () => {
  const wrapper = shallow(<MatchTile {...props} />)
  expect(wrapper.find('.teams-and-scores').text()).toEqual("Arsenal (1) 3 - Everton (0) 1");
});

describe('scoreCheck function tests', () => {

  it('returns an empty string if passed null', () => {
    const wrapper = shallow(<MatchTile {...props} />);
    expect(wrapper.instance().scoreCheck(null)).toBe("");
  });

  it('returns what it is passed if not null', () => {
    const wrapper = shallow(<MatchTile {...props} />);
    expect(wrapper.instance().scoreCheck("2")).toBe("2");
  });

});