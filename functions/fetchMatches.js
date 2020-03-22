import fetch from 'node-fetch';

const { AUTH_TOKEN } = process.env;

exports.handler = function(event, context, callback) {

  return fetch(`http://api.football-data.org/v2/competitions/2021/matches`, {headers : {'X-Auth-Token': AUTH_TOKEN} } )
    .then(response => response.json())
    // .then(data => this.setState({matches: data, loading: false} ) )
    .then(response => {
      return callback(null, {
        statusCode: 200,
        body: response.body
      });
    })
    .catch(error => {
      return callback(null, {
        statusCode: error.status,
        body: error.body
      });
    });
}
