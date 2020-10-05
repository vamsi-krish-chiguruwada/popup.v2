import React from "react";
import "./ErrorMessage.css";
// import { Icon1 } from "../../icons/icon1.svg";
class ErrorMessage extends React.Component {
  state = { hover: false };
  // let customClassName = "error-message-box";
  bgColor = (per) => {
    // customClassName += " hover";
    this.setState({ hover: per });
  };
  render() {
    return (
      <div
        onMouseOver={() => this.bgColor(true)}
        onMouseOut={() => this.bgColor(false)}
        className={
          this.state.hover ? "error-message-box hover" : "error-message-box"
        }
      >
        <div className=" box box-top">
          <div className="icon-holder">
            <span className="material-icons">control_camera</span>
          </div>
          <div className="id-holder">
            <p className="error-content error-header">{this.props.name}</p>
            <p className="error-content error-id">{this.props.errId}</p>
          </div>
          <div
            onClick={() => alert(this.props.message)}
            className={
              this.state.hover ? "Open-holder showOpen" : "Open-holder"
            }
          >
            <p>Open</p>
          </div>
        </div>
        <div className="box box-bottom">
          <p>{this.props.message} </p>
        </div>
      </div>
    );
  }
}
export default ErrorMessage;
