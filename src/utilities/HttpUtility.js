import humps from 'humps';
import axios from 'axios';


const RequestMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  OPTIONS: 'OPTIONS',
  HEAD: 'HEAD',
  PATCH: 'PATCH',
};

const decamelizeData = (data) => {
  return data
    ?
      humps.decamelizeKeys(data, {
        separator: '_',
        process: function(key, convert, options) {
          return /^[A-Z0-9_]+$/.test(key) ? key : convert(key, options);
        },
      })
    : undefined;
};


export const GET = async (endpoint, params, requestConfig) => {
  const paramsConfig = decamelizeData(params);
  return request(
    {
      url: endpoint,
      method: RequestMethod.GET,
    },
    {
      ...requestConfig,
      params: paramsConfig,
    }
  );
};

const request = async (restRequest, config) => {
  try {
    const axiosRequestConfig = {
      ...config,
      method: restRequest.method,
      url: restRequest.url,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    };
    const response = await axios(axiosRequestConfig);
    return response;
  } catch (e) {
    console.log(e)
  }
};
