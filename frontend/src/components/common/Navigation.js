import {browserHistory} from "react-router";

export const redirectHome = () => {
  return browserHistory.push("/");
};
