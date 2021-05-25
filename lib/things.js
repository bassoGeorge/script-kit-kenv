async function getAuthToken() {
  return env("THINGS_AUTH_TOKEN", { hint: 'Get authentication token from things -> preferences -> General -> Enable Things URL -> manage' })
}


/**
 *
 * @param data {Object}
 * @param requiresAuth {boolean}
 */
export async function executeJSON(data, requiresAuth = false) {
  let params = {
    data: JSON.stringify(data),
    reveal: 'true'
  };

  if (requiresAuth) {
    const authToken = await getAuthToken();
    params['auth-token'] = authToken;
  }

  const url = buildURL('json', params)
  return runURL(url);
}


/**
 * @param name {string}
 */
export async function showListByName(name) {
  const url = buildURL('show', { query: name })
  return runURL(url);
}

/**
 *
 * @param operation: {string}
 * @param params: {Object.<string, string>}
 */
function buildURL(operation, params) {
  const path = Object.entries(params).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&')
  return `things:///${operation}?${path}`;
}



/**
 * @param url {string}
 */
async function runURL(url) {
  return exec(`open ${url}`)
}
