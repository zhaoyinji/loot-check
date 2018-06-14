import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('Renders correctly', () => {
    expect(app).toMatchSnapshot();
  })

  it('contains a Connected Wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });

  it('contains a Connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });
})
