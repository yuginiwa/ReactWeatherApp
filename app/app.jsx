var React         = require("react"),
    ReactDOM      = require("react-dom");
    
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var Main  = require("Main");
var GetWeather = require("GetWeather");
var About = require("About");
var Examples = require("Examples");

// Load Foundaion
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// Style App.css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={GetWeather} />
    </Route>
  </Router>,
  document.getElementById("app")
);
