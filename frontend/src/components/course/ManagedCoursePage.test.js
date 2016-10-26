import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {
  ManageCoursePage,
  titleErrorMsg,
  authorErrorMsg,
  categoryErrorMsg,
  lengthErrorMsg,
  emptyCourse} from './ManageCoursePage';
import {durationPattern} from '../common/Validation';

describe('Manage Course Page', () => {
  it('sets error message when trying to save course with empty fields', () => {
    const props = {
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}},
      course: emptyCourse
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe(titleErrorMsg);
    expect(wrapper.state().errors.authorId).toBe(authorErrorMsg);
    expect(wrapper.state().errors.category).toBe(categoryErrorMsg);
    expect(wrapper.state().errors.length).toBe(lengthErrorMsg);
  });
});

describe('Matching regex for course length', () => {
  it('Matching correct regex for course length', () => {
    const length_00 = '00';
    const length_00_00 = '00:00';
    const length_00_00_00 = '00:00:00';
    const length_10_12_05 = '10:12:05';
    const length_4554_07_59 = '10:12:05';

    expect(durationPattern.test(length_00)).toBe(true);
    expect(durationPattern.test(length_00_00)).toBe(true);
    expect(durationPattern.test(length_00_00_00)).toBe(true);
    expect(durationPattern.test(length_10_12_05)).toBe(true);
    expect(durationPattern.test(length_4554_07_59)).toBe(true);
  });

  it('Matching incorrect regex for course length', () => {
    const length_67 ='67';
    const length_67_67 ='67:67';
    const length_10_67_67 ='10:67:67';
    const length_4554_07_59 = '10:72:05';

    expect(durationPattern.test(length_67)).toBe(false);
    expect(durationPattern.test(length_67_67)).toBe(false);
    expect(durationPattern.test(length_10_67_67)).toBe(false);
    expect(durationPattern.test(length_4554_07_59)).toBe(false);
  });
});
