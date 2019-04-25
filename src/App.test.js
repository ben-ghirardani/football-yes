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