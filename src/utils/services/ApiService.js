import http from "../httpClient";

const getAll = () => {
  return http.get("/products/list");
};

const getAllPriceReductions = () => {
  return http.get("/pricereduction/list");
};

const getAllSuppliers = () => {
  return http.get("/suppliers/list");
};

const login = data => {
  return http.post("/login", data);
};

const get = id => {
  return http.get(`/products/${id}`);
};

const create = data => {
  return http.post("products/createproduct", data);
};

const update = (id, data) => {
  return http.put(`/products/modify/${id}`, data);
};

const remove = id => {
  return http.delete(`/products/delete/${id}`);
};

const ApiService = {
  getAll,
  getAllPriceReductions,
  getAllSuppliers,
  get,
  create,
  update,
  remove,
  login
};

export default ApiService;