import React from 'react';
import Matches from './matches';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let props;

beforeEach(() => {
  props = {
    currentTeam: "Arsenal",
    accessStoredTeamMatches: jest.fn().mockReturnValue([
      {
        id: 1,
        utcDate: "2019-08-09T19:00:00Z",
        homeTeam: {
        name: "Arsenal"
        },
        awayTeam: {
          name: "Burnley"
        },
        score: {
          halfTime: {
            homeTeam: "1",
            awayTeam: "0"
          },
          fullTime: {
            homeTeam: "2",
            awayTeam: "0"
          }
        }
      },
      {
        id: 2,
        utcDate: "2019-09-26T15:34:46Z",
        homeTeam: {
        name: "Liverpool"
        },
        awayTeam: {
          name: "Manchester United"
        },
        score: {
          halfTime: {
            homeTeam: "4",
            awayTeam: "0"
          },
          fullTime: {
            homeTeam: "6",
            awayTeam: "2"
          }
        }
      }
    ])
  }
});

it('matches snapshot', ()=> {
  const wrapper = shallow(<Matches {...props} />);
  expect(wrapper).toMatchSnapshot();
})

it('renders div with className .matches', () => {
  const wrapper = shallow(<Matches {...props} />);
  expect(wrapper.find('div')).toHaveLength(1);
  expect(wrapper.find('.matches')).toHaveLength(1);
});

it('renders h1 with correct text', () => {
  const wrapper = shallow(<Matches {...props} />);
  expect(wrapper.find('h1')).toHaveLength(1);
  expect(wrapper.find('h1').text()).toEqual("Fixtures: Arsenal");
});

it('calls map method no. of times equal to length of stored matches', () => {
  const wrapper = shallow(<Matches {...props} />);
  expect(wrapper.find('MatchTile')).toHaveLength(2);
});