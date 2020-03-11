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