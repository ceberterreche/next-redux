import { userActions } from "./userSlice";
import { user } from "./userSlice";
export const login = (user: user) => async (dispatch) => {
  try {
    // const response = await fetch(
    //   "https://reqres.in/api/login"
    // );

    dispatch(userActions.loginSuccess(user));
  } catch (e) {
    return console.error(e.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    // const response = await fetch(
    //   "https://reqres.in/api/login"
    // );
    return dispatch(userActions.logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
