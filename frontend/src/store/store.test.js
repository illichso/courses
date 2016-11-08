import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../constants/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('Should handle creating 2 courses', () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const courses = [
      {id: 'A', title: "Clean Code"},
      {id: 'B', title: "Refactoring"}
    ];

    //act
    const createFirstCourseAction = courseActions.createCourseSuccess(courses[0]);
    store.dispatch(createFirstCourseAction);

    const createSecondCourseAction = courseActions.createCourseSuccess(courses[1]);
    store.dispatch(createSecondCourseAction);

    //asset
    const actual = store.getState().courses;
    const expected = [
      {id: 'A', title: "Clean Code"},
      {id: 'B', title: "Refactoring"}
    ];

    expect(actual).toEqual(expected);
  });

  it('Should handle updating 1 course', () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {id: 'A', title: "Clean Code"};

    //act
    const createCourseAction = courseActions.createCourseSuccess(course);
    store.dispatch(createCourseAction);

    course.title = 'New Title';
    const action = courseActions.updateCourseSuccess(course);
    store.dispatch(action);

    //asset
    const actual = store.getState().courses[0];
    const expected = {id: 'A', title: 'New Title'};

    expect(actual).toEqual(expected);
  });
});
