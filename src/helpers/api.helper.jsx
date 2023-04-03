const apiUrl = import.meta.env.VITE_API_URL;

class ApiError extends Error {}

function handleResponse(res) {
  if (!res.ok) {
    throw new ApiError('Something went wrong, please try again later.');
  }

  return res.json();
}

const headers = {
  'Content-type': 'application/json',
};

export function configureApi(entity) {
  function get(search = {}, options = {}) {
    let restOfUrl = '';
    if (Object.keys(search).length > 0) {
      restOfUrl = '?';
      for (const key in search) {
        restOfUrl += `${key}=${search[key]}`;
      }
    }
    return fetch(`${apiUrl}/${entity}${restOfUrl}`, options).then(
      handleResponse
    );
  }

  function update(id, body, options = {}) {
    return fetch(`${apiUrl}/${entity}/${id}`, {
      headers,
      body: JSON.stringify(body),
      method: 'PATCH',
      ...options,
    }).then(handleResponse);
  }

  function add(body, options = {}) {
    return fetch(`${apiUrl}/${entity}`, {
      headers,
      body: JSON.stringify(body),
      method: 'POST',
      ...options,
    }).then(handleResponse);
  }

  function remove(id, options = {}) {
    return fetch(`${apiUrl}/${entity}/${id}`, {
      method: 'DELETE',
      ...options,
    }).then(handleResponse);
  }

  return {
    get,
    update,
    add,
    remove,
  };
}
