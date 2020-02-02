import React from 'react';
import Table from './Table.js';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let props;

beforeEach(() => {
  props = {
    standings: {
      standings: [
        {
          table: [
            {
              position: 1,
              team: {
                name: "Arsenal",
                id: 1
              },
              playedGames: 20,
              won: 15,
              draw: 3,
              lost: 2,
              goalsFor: 60,
              goalsAgainst: 10,
              goalDifference: 50,
              points: 48
            }, 
            {
              position: 2,
              team: {
                name: "Everton",
                id: 2
              },
              playedGames: 20,
              won: 5,
              draw: 10,
              lost: 5,
              goalsFor: 25,
              goalsAgainst: 24,
              goalDifference: 1,
              points: 25
            }
          ]
        }
      ]
    }
  };
});

it('matches snapshot', ()=> {
  const wrapper = shallow(<Table {...props} />);
  expect(wrapper).toMatchSnapshot();
})

it('renders the correct elements', () => {
  const wrapper = shallow(<Table {...props} />);
  expect(wrapper.find('table')).toHaveLength(1);
  expect(wrapper.find('tbody')).toHaveLength(1);
});

// getting the same error here as <Body/> due to withRouter being used outside of a Router. Fix first.
it('renders the correct number of body components', () => {
  const wrapper = mount(<Table {...props} />);
  expect(wrapper.find('Body')).toHaveLength(2);
});