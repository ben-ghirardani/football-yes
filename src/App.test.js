import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import "isomorphic-fetch";
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const component = shallow(<App/>);
  expect(component).toMatchSnapshot();
});

// Error - TypeError: Cannot assign to read only property 'Symbol(Symbol.toStringTag)' of object '#<process>'
// related to a bug with Node v11.11, works on Node v11.12 but currently need to eject to resolve. Advised not to.

// Will have to go back and test once code is written.