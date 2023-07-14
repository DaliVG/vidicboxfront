import axios from "axios";
import http from "../httpAuth";

const login = data => {
    return http("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIiwiZXhwIjoxNjkxOTMwOTU4LCJ1c2VybmFtZSI6IlVzZXIifQ.3kmtxYJPN6nCEj7LwhwyO0UBDAFln_xxTYNmCYSTgV4").post("login", data);
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