var React       = require("react");
var GetWeatherMessage = require("GetWeatherMessage");
var GetWeatherForm   = require("GetWeatherForm");
var openWeatherMap   = require("openWeatherMap");
var ErrorModal       = require("ErrorModal");


var GetWeather  = React.createClass({
   getInitialState: function () {
     return {
        isLoading: false
     }
   },
   handlingSearch: function (location) {
     // Yung this - value ay location na ininput ng user
     var that = this;
     
     this.setState({
         isLoading: true,
         errorMessage: undefined,
         location: undefined,
         temp: undefined
     });
     
     openWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
            isLoading: false,
            location: location,
            temp: temp
         }); 
     }, function (e) {
        that.setState({
            isLoading: false,
            errorMessage: e.message
        });
     });
   },
   componentDidMount: function () {
       var location = this.props.location.query.location;
       
       if (location && location.length > 0) {
           this.handlingSearch(location);
           window.location.hash = '#/'
       }
   },
   componentWillReceiveProps: function (newProps) {
       var location = newProps.location.query.location;
       
       if (location && location.length > 0) {
           this.handlingSearch(location);
           window.location.hash = '#/'
       }
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
       
       function renderError () {
           if(typeof errorMessage === 'string'){
               return (
                   <ErrorModal message={errorMessage}/>
                )
           }
       }
       
       return (
            <div>
               <h1 className="text-center page-title">Get Weather</h1>   
               <GetWeatherForm onSearch={this.handlingSearch}/>
               {renderMessage()}
               {renderError()}
            </div>
        );
   }
});

module.exports = GetWeather;