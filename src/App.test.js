import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import "isomorphic-fetch";
import ReactDOM from 'react-dom';
import App from './App';
import { jsxEmptyExpression } from '@babel/types';

it('renders without crashing', () => {
  const component = shallow(<App/>);
  expect(component).toMatchSnapshot();
});

// unfinished?
describe('App fetch test', () => {
  it('fetches data from server', done => {
    const mockSuccessResponse = {};
    const mockJSONPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJSONPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<App/>);

    expect(global.fetch).toHaveBeenCalledTimes(3);

    process.nextTick(() => {
      
    })
  })
})