var React   = require("react");


var GetWeatherMessage = ({location, temp}) => {
    return (
         <h1 className="text-center">It's {temp} &#8451; in {location}</h1>   
    );
};

module.exports = GetWeatherMessage;