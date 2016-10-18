var React   = require("react");


var GetWeatherMessage = ({location, temp}) => {
    return (
         <h1>It's {temp} &#8451; in {location}</h1>   
    );
};

module.exports = GetWeatherMessage;