import React from "react";
import "./Popup.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class Popup extends React.Component {
  state = {
    erroes: [
      {
        name: "Test Node",
        id: "DHCGSJHGHSGDVCHBVMXBDV",
        message: "value cant be null",
      },
      {
        name: "js",
        id: "VDHCGSJHGHSGVMXBDDVCHBV",
        message: "value cant be null value cant be nullvalue cant be null",
      },
      {
        name: "Test Node",
        id: "HSGDVCJHGBDVHBVMXVDHCGS",
        message: "value cant be nullvalue cant be nullvalue cant be null",
      },
      {
        name: "Node",
        id: "SGDHVCHVDHCGBVMXBSJHGDV",
        message: "value cant be nullvalue cant be nullvalue cant be null",
      },
    ],
  };
  render() {
    return (
      <div className="Popup-background">
        <div className="popup">
          <p className="header">Validations</p>
          <div className="popup-inner-box">
            {this.state.erroes.map((err) => {
              return (
                <ErrorMessage
                  key = {err.id}
                  name={err.name}
                  errId={err.id}
                  message={err.message}
                />
              );
            })}
            
          </div>
          <button className="btn" onClick={this.props.toglePopup}>
            Close
          </button>
        </div>
        {/* <button >hide</button> */}
      </div>
    );
  }
}

export default Popup;
