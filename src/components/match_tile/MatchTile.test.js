import React from 'react';
import MatchTile from './MatchTile';
import TeamNameEditor from '../team_name_editor/TeamNameEditor.js'
jest.mock('../team_name_editor/TeamNameEditor.js');
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

beforeEach(() => {
  TeamNameEditor.mockClear();
});

// IT'S WORKING!!!
it('MatchTile calls TeamNameEditor twice', ()=> {
  const wrapper = shallow(<MatchTile/>);
  expect(TeamNameEditor).toHaveBeenCalledTimes(2);
})

describe('scoreCheck function tests', () => {

  it('returns an empty string if passed null', () => {
    const wrapper = shallow(<MatchTile/>);
    expect(wrapper.instance().scoreCheck(null)).toBe("");
  });

  it('returns what it is passed if not null', () => {
    const wrapper = shallow(<MatchTile/>);
    expect(wrapper.instance().scoreCheck("2")).toBe("2");
  });

});