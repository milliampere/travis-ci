import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({email: 'hej', password: 'hej'});
  wrapper.find('form').simulate('submit');
  expect(wrapper.state('message')).toMatchObject({ type: 'ERROR', body: 'Wrong password or email'});
});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({email: 'camilla@mail.com', password: 'Hejsan123'});
  wrapper.find('form').simulate('submit');
  expect(wrapper.state('message')).toMatchObject({"body": "Logged in", "type": "SUCCESS"});
});

it('change email state when input is changed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  expect(wrapper.state('email')).toBe('');
  const emailEvent = {target: {name: "email", value: "camilla@mail.se"}};
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  expect(wrapper.state('email')).toBe('camilla@mail.se');
})