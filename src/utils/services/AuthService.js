import axios from "axios";
import client from "../httpClient";

const login = data => {
    return client.get("/login", data)
      };

 const logout = () => {
    localStorage.removeItem("user");
  }

  const register = data => {
    return axios.post("/users/signup", data)
  };

  const AuthService = {
    login,
    logout,
    register
  };

export default AuthService;