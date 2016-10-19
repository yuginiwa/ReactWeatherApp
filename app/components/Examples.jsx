var React   = require("react");
var {Link}  = require("react-router");

var Examples = (props) => {
   return (
      <div>
         <h1 className="text-center page-title">Examples</h1>
         <p>This is the list of Example Locations</p>
         <ol>
            <li>
               <Link to="/?location=Manila">Manila, Philippines</Link>
            </li>
            <li>
               <Link to="/?location=Tokyo">Tokyo, Japan</Link>
            </li>
         </ol>
      </div>  
   );
};

module.exports = Examples;