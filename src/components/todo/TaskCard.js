import React, { Component } from "react"
import { Link } from "react-router-dom";

export default class TaskCard extends Component {
    render() {
        // console.log(this.props);
        return (
            <React.Fragment>
            <div className="card-body">
                    <div className="card-content">
                    <h5 className="card-header">{this.props.task.taskName}</h5>
                     {this.props.task.task}
                        <div className="task-card-date">
                        {this.props.task.taskDate}
                        </div>
                     </div>
                     <div className="card-buttons">
                        Coming soon: details and edit
                     </div>
             </div>
             </React.Fragment>
        )
    }
}

// "task" on line 8 here is created as a new prop from "chores.task" on line 12 of TaskCard.
