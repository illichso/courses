import * as types from './actionTypes';
import authorApi from '../api/authorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadAuthorsSuccess = authors => {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
};

export const createAuthorSuccess = author => {
  return {type: types.CREATE_AUTHOR_SUCCESS, author};
};

export const updateAuthorSuccess = author => {
  return {type: types.UPDATE_AUTHOR_SUCCESS, author};
};

export const deleteAuthorSuccess = author => {
  return {type: types.DELETE_AUTHOR_SUCCESS, author};
};

export const loadAuthors = () => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors.data._embedded.authors));
    }).catch((error) => {
      console.log(error);
      throw(error);
    });
  };
};

export const saveAuthor = author => {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return authorApi.saveAuthor(author).then(savedAuthor => {
      author.id ? dispatch(updateAuthorSuccess(savedAuthor)) :
      dispatch(createAuthorSuccess(savedAuthor));
    }).catch(error => {
      console.log(error);
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
};

export const deleteAuthor = author => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authorApi.deleteAuthor(author.id).then(authors => {
      dispatch(deleteAuthorSuccess(author));
    }).catch((error) => {
      console.log(error);
      throw(error);
    });
  };
};
