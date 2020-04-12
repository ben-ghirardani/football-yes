Was getting a build error related to the braces package, preventing app from loading. After several attempts to fix, I removed the following line and it resolved -

package.json

{
  "name": "football-v2",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.18.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-router": "^5.1.2",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.0.0",
    "styled-components": "^4.4.1"

    --> "braces": "^2.3.2",

  },


To do -

Component will unmount - unsubscribe to APIs
*** do i need to cancel localStorage? If so where?
  
*** Check file and folder names for consisitency

Only current year available? Need to update fetch requests dynamically?


cut from netlify.toml -

  <!-- [build] -->
    <!-- Command = "npm run lambda-build" -->
    <!-- Functions = "lambda" -->


Changed name of file to fetchMatches, changed package.json name to match it. Commented out setState line. Edited fetchMatches in app.js
Something is wrong.


First attempts at fetch netlify functions

  // this is returning the code from /public/index.html
  async fetchMatchesAPI() {
    const url = '    https://gallant-hawking-a37956.netlify.com/.netlify/functions/fetchMatches';
    try {
        const response = await fetch(url);
        // const data = await response.json();
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
  }

    async fetchStandingsAPI() {
    const url = `https://gallant-hawking-a37956.netlify.com/.netlify/functions/fetchStandings`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}