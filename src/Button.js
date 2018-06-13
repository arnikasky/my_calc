import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {

 handleClick = () => {
    this.props.clickHandler(this.props.name);
};


  render() {
    return (
      <div className="Button">
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
};

Button.propTypes = {
  clickHandler: PropTypes.func,
};
export default Button;

