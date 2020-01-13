import React from 'react';
import MatchTile from './MatchTile';
import TeamNameEditor from '../team_name_editor/TeamNameEditor.js'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// failing as function teamNameEditor is undefined. Do I need to pass dummy data as 'name' for the function as props?
it('MatchTile renders as expected', ()=> {
  const wrapper = shallow(<MatchTile/>);
  expect(wrapper).toMatchSnapshot();
})

// add tests from https://reactjs.org/docs/shallow-renderer.html ?