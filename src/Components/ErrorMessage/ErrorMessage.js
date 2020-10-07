import React from "react";
import "./ErrorMessage.css";


const ErrorMessage =(props)=> {
 
  const showAlert = (id) => {
    

    alert(id);
    
  };
  
  
    return (
      <div className="inputWraper">
        <input className="checkbox" type="checkbox" id={props.id}></input>
        <label htmlFor={props.id}>
          <div
            onMouseEnter={(e) => props.bgColor(e,true)}
            onMouseLeave={(e) => props.bgColor(e,false)}
            onClick={()=> props.updateids(props.id)}
            id = {props.hoverid}
            className={
              props.hover ? "error-message-box hover" : "error-message-box"
            }
          >
            <div className=" box box-top">
              <div className="icon-holder">
                <span className="material-icons">control_camera</span>
              </div>
              <div className="id-holder">
                <p className="error-content error-header">{props.name}</p>
                <p className="error-content error-id">{props.id}</p>
              </div>

              {props.hover ? (
                <div
                  onClick={() => showAlert(props.id)}
                  className="Open-holder showOpen"
                >
                  <p>Open</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="box box-bottom">
              <p>{props.message}</p>
            </div>
          </div>
      </label>
      </div>
    );
  
}
export default ErrorMessage;











// class ErrorMessage extends React.Component {
//   // state = { hover: false };
  
//   // bgColor = (key,per) => {
//   //   console.log(key,"bgColor");
//   //   this.setState({ hover: per });
//   // };
//   showAlert = (id) => {
//     alert(id);
//   };
  
  
//   render() {
//     return (
      // <div className="inputWraper">
      //   <input className="checkbox" type="checkbox" id={this.props.id}></input>
      //   <label htmlFor={this.props.id}>
//           <div
//             onMouseEnter={(e) => this.props.bgColor(e,true)}
//             onMouseLeave={(e) => this.props.bgColor(e,false)}
//             id = {this.props.hoverid}
//             className={
//               this.props.hover ? "error-message-box hover" : "error-message-box"
//             }
//           >
//             <div className=" box box-top">
//               <div className="icon-holder">
//                 <span className="material-icons">control_camera</span>
//               </div>
//               <div className="id-holder">
//                 <p className="error-content error-header">{this.props.name}</p>
//                 <p className="error-content error-id">{this.props.id}</p>
//               </div>

//               {this.props.hover ? (
//                 <div
//                   onClick={() => this.showAlert(this.props.id)}
//                   className="Open-holder showOpen"
//                 >
//                   <p>Open</p>
//                 </div>
//               ) : (
//                 ""
//               )}
//             </div>
//             <div className="box box-bottom">
//               <p>{this.props.message}</p>
//             </div>
//           </div>
//       //   </label>
//       // </div>
//     );
//   }
// }
// export default ErrorMessage;
