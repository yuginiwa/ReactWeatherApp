var React = require("react");
var ReactDOM = require("react-dom");
var ReacDOMServer = require("react-dom/server");

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: "Error"   
        }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var modalMarkUp = (
           <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
                <h1>{title}</h1>
                <p>{message}</p>
                <p>
                    <button className='button hallow' data-close=''>
                        Close
                    </button>
                </p>
           </div>
        );
        
        var $modal = $(ReactDOMServer.renderToString(modalMarkUp));
        $(ReactDOM.findDOMNode(this)).html($modal);
        
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        var {title, message} = this.props;
        return (
            <div>
            </div>    
        );
   } 
});

module.exports = ErrorModal;