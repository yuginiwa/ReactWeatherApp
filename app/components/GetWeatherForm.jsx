var React   = require("react");

var GetWeatherForm = React.createClass({
   onFormSubmit: function (e) {
       e.preventDefault();
       
       var location = this.refs.location.value;
       if(location.length > 0) {
           this.refs.location.value = "";
           this.props.onSearch(location);
       }
   },
   render: function () {
       return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder="Search Weather"/>
                    <input type="submit" value="Search" />
                </form>
            </div>   
        );
   } 
});

module.exports = GetWeatherForm;