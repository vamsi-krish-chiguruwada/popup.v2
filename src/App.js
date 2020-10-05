import React from "react";
import "./App.css";
import Popup from "./Components/Popup/Popup";

class App extends React.Component {
  state = {
    showPopup: true
  };
  toglePopup = () => {

    this.setState({ showPopup: !this.state.showPopup });

  };
  render() {
    return (
      <div className="App">
        <button 
          onClick={this.toglePopup}
        >
          show
        </button>
        {this.state.showPopup ? <Popup toglePopup = {this.toglePopup} /> : ""}
      </div>
    );
  }
}

export default App;
