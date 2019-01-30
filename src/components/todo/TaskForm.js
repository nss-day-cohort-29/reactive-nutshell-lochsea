// import React, { Component } from "react";

// export default class TaskForm extends Component {

//     state = {
//         "taskName": ""
//     };

//     handleFieldChange = evt => {
//         const taskStateToChange = {};
//         console.log(evt.target.id, evt.target.value);
//     };

//     render() {
//         return(
//             <React.Fragment>
//                 <form className="task-input-form">
//                     <div className="task-form-group">
//                         <label htmlFor="task-form-header">Task Form</label>
//                         <input type="text" required className="task-form-input" onChange={this.handleFieldChange} id="taskName" placeholder="Enter Task Name"/>
//                         <button type="submit" onClick={this.constructNewTask} className="task-submit-btn">Submit</button>
//                     </div>
//                 </form>
//             </React.Fragment>
//         );
//     }
// }
