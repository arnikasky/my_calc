import React from "react";
import PropTypes from "prop-types";

class Output extends React.Component {
  

  render() {
    return (
      <div className="Output">
         <div>{this.props.value}</div>
      </div>
    );
  }
};
Output.propTypes = {
  value: PropTypes.string,
};
export default Output;
