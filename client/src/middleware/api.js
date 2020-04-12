import { normalizr, schema } from "normalizr";

const API_ROOT = "http://localhost:3001";

const callApi = (endpoint, schema) => {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl).then(response =>
    response.json().then(json => {
      return json;
    })
  );
};

export default callApi;
