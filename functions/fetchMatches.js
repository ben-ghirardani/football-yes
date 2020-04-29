const axios = require('axios');

const { AUTH_TOKEN } = process.env;

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2',
  timeout: 1000,
  headers: {
    'X-Auth-Token': AUTH_TOKEN,
    'Access-Control-Allow-Origin': '*'
  }
});

exports.handler = async () => {
  try {
    const response = await instance.get(`/competitions/PL/matches`);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch(error) {
    return {
      statusCode: error.status,
      body: error.body
    };
  }
}
