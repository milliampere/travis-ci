import React from 'react';
import { mount } from 'enzyme';
import Message from '../components/Message';

it('displays error message', () => {
  const message = {
    type: 'ERROR',
    body: 'fel fel fel'
  }
  const wrapper = mount(<Message message={message} />);
  expect(wrapper.find('p').text()).toEqual('fel fel fel')
});

it('displays success message', () => {
  const message = {
    type: 'SUCCESS',
    body: 'jibo'
  }
  const wrapper = mount(<Message message={message} />);
  expect(wrapper.find('p').text()).toEqual('jibo')
});