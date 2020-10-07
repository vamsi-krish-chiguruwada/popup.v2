import React from "react";
import "./Popup.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { v4 as uuidv4 } from "uuid";

class Popup extends React.Component {
  state = {
    erroes: [
      {
        name: "Test Node",
        id: uuidv4(),
        message: "value cant be null",
        hover:false,
        hoverid:"0"
      },
      {
        name: "js",
        id: uuidv4(),
        message: "value cant be null value cant be nullvalue cant be null",
        hover:false,
        hoverid:"1"

      },
      {
        name: "Test Node",
        id: uuidv4(),
        message: "value cant be nullvalue cant be nullvalue cant be null",
        hover:false,
        hoverid:"2"

      },
      {
        name: "Node",
        id: uuidv4(),
        message: "value cant be nullvalue cant be nullvalue cant be null",
        hover:false,
        hoverid:"3"

      },
    ],
  };
  selectedIds = [];

  bgColor = (e,per) => {
   let temp = [...this.state.erroes];
   temp[parseInt(e.currentTarget.id)].hover = per;
    this.setState({ erroes: temp });
  };

  updateids = (id) =>{

    console.log(id);
    if(!this.selectedIds.includes(id)){
      console.log("not in sids");
      this.selectedIds.push(id);
      console.log("pushed",this.selectedIds);
    }else{
      console.log("in sids");
      this.selectedIds.splice(this.selectedIds.indexOf(id),1);
      console.log("removed",this.selectedIds);
    }
  }

  showIds = () =>{
    this.selectedIds.map((per)=>alert(per))
  }


  render() {
    return (
      <div className="Popup-background">
        <div className="popup">
          <p className="header">Validations</p>
          <div className="popup-inner-box">
            {this.state.erroes.map((err) => {
              return (
                <ErrorMessage
                  {...err}
                  key={err.id}
                  updateids = {this.updateids}
                  bgColor={this.bgColor}
                />
              );
            })}
          </div>
          <button className="btn btnclose" onClick={this.props.toglePopup}>
            Close
          </button>
          <button className="btn btnSubmit" onClick={this.showIds}>
            submit
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
