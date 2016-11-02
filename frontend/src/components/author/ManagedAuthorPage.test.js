import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {
  ManageAuthorPage,
  firstNameErrorMsg,
  lastNameErrorMsg,
  emptyAuthor} from './ManageAuthorPage';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

// describe('Manage Author Page', () => {
//   it('sets error message when trying to save author with empty fields', () => {
//     const props = {
//       authors: [],
//       actions: {saveAuthor: () => {return Promise.resolve();}},
//       author: emptyAuthor
//     };
//
//     const wrapper = mount(<ManageAuthorPage {...props}/>);
//     const saveButton = wrapper.find('input').last();
//     expect(saveButton.prop('type')).toBe('submit');
//     saveButton.simulate('click');
//     expect(wrapper.state().errors.firstName).toBe(firstNameErrorMsg);
//     expect(wrapper.state().errors.lastName).toBe(lastNameErrorMsg);
//   });
// });
