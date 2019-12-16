import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// get current location
const location = history.location;

// listen for changes to location
const unlisten = history.listen((location, action) =>{
  console.log(action, location.pathname, location.state);
});

// correct export? export 'history'?
export default createBrowserHistory();