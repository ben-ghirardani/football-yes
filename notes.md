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
  
error handling for the fetch requests
  
make sure the promises are working correctly, add logic to the table that allows it to render with no data? Rather than just say 'error', could bring up an unpopulated table - then ask to reload, or re-send a fetch request after a certain time?

correct issue with refreshing fixtures page, either sort out the history or redirect to main page.

general styling of pages

styling of monitor screen to mobile screen, media queries, etc.