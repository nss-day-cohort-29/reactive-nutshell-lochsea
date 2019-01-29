import React, { Component } from "react";

export default class TaskForm extends Component {

    state = {
        "userId": "",
        "task": ""
    };

    render() {
        return(
            <React.Fragment>
                <form>
                    <div>
                        <label>Task Form</label>
                        <input type="text" required className="task-form" onChange={this.handleFieldChange} id="taskName" placeholder="Enter Task Name"/>
                    </div>
                </form>
            </React.Fragment>

        )
    }
}
