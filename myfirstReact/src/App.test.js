import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {add} from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
const app =shallow(<App/>);

test('test add',()=>{
  const value=add(1,2);
  expect(value).toBe(3);
})
it('renders correctly', ()=> {
expect(app).toMatchSnapshot();

});
describe('Button', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });
 
 });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
