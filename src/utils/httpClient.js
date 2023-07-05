const API = "http://localhost:8080/";

export function get(path) {
  console.log(API+path)
  return fetch(API + path).then((result) => result.json());
}