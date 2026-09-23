const baseURL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

async function request(method, path, body) {
  const headers = { Accept: 'application/json' };
  const token = localStorage.getItem('token');
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';

  const response = await fetch(`${baseURL}${path}`, {
    method,
    headers,
    credentials: 'include',
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  const result = { data, status: response.status, headers: response.headers };
  if (!response.ok) {
    const error = new Error(data?.message || `Request failed with status ${response.status}`);
    error.response = result;
    throw error;
  }
  return result;
}

export const appClient = {
  defaults: { baseURL },
  get: (path) => request('GET', path),
  post: (path, body) => request('POST', path, body),
};
