const SAVE_ROUTE_TO_REDIRECT_BACK = 'auth/SAVE_ROUTE_TO_REDIRECT_BACK';

export function redirectToLogin() {
  return dispatch => dispatch(push('/login'));
}

export function saveRouteToBackRedirect(redirectLocation) {
  return dispatch => dispatch({
    type: SAVE_ROUTE_TO_REDIRECT_BACK,
    redirectLocation
  });
}
