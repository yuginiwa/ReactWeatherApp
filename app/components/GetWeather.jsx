var React       = require("react");
var GetWeatherMessage = require("GetWeatherMessage");
var GetWeatherForm   = require("GetWeatherForm");
var openWeatherMap   = require("openWeatherMap");


var GetWeather  = React.createClass({
   getInitialState: function () {
     return {
        isLoading: false
     }
   },
   handlingSearch: function (location) {
     // Yung this - value ay location na ininput ng user
     var that = this;
     
     this.setState({isLoading: true});
     
     openWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
            isLoading: false,
            location: location,
            temp: temp
         }); 
     }, function (errorMessage) {
        that.setState({isLoading: false});
        alert(errorMessage);
     });
   },
   render: function () {
       var {isLoading, location, temp} = this.state;
       
       function renderMessage(){
          if(isLoading) {
            return <h3>Fetching Weather....</h3>;
          }else if(location && temp){ 
            return <GetWeatherMessage location={location} temp={temp}/>;
          }
       }
       
       return (
            <div>
               <h1 class="text-center">Get Weather</h1>   
               <GetWeatherForm onSearch={this.handlingSearch}/>
               {renderMessage()}
            </div>
        );
   }
});

module.exports = GetWeather;