import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import ReactDOM from 'react-dom';
import App from './App';
// import { jsxEmptyExpression } from '@babel/types';

let props;

beforeEach(() => {
  props = {
    parsedStoredMatches: [
      {
        homeTeam: {
          id: 1
        },
        awayTeam: {
          id: 2
        }
      },
      {
        homeTeam: {
          id: 1
        },
        awayTeam: {
          id: 3
        }
      },
      {
        homeTeam: {
          id: 4
        },
        awayTeam: {
          id: 2
        }
      }
    ],

  }
});


it('matches snapshot', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper).toMatchSnapshot();
});

it('getTeamStoredMatches correctly filters match objects', () => {
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.instance().getTeamStoredMatches(1, props.parsedStoredMatches)).toHaveLength(2);
  expect(wrapper.instance().getTeamStoredMatches(2, props.parsedStoredMatches)).toHaveLength(2);
  expect(wrapper.instance().getTeamStoredMatches(4, props.parsedStoredMatches)).toHaveLength(1);
  expect(wrapper.instance().getTeamStoredMatches(8, props.parsedStoredMatches)).toHaveLength(0);
});