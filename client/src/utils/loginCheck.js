import { getCookie } from "./cookies";
import {jwtDecode} from "jwt-decode";

export function loginCheck() {
  const username = getCookie("username");
  const jwtToken = getCookie("jwt");
  
  if (username && jwtToken) {
      const decodedToken = jwtDecode(jwtToken);
      const id = decodedToken.userId
    return { id, username, jwtToken };
  } else {
    // No valid authentication found
    return false;
  }
}
