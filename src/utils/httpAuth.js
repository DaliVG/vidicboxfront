import axios from "axios";

export default function httpAuth(token) {
    let headers = {
      "Content-type": "application/json"
    };
  
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  
 return axios.create({
      baseURL: "http://localhost:8080/",
      headers: headers
    });
  }