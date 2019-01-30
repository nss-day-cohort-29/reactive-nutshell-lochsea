import React, { Component } from "react"
// import { Link } from "react-router-dom";

export default class TaskCard extends Component {
    render() {
        // console.log(this.props);
        return (
            <div key={this.props.task.id} className="card-body">
                    <div className="card-content">
                    <h5 className="card-header">{this.props.taskName}</h5>
                     {this.props.task}
                        <div className="task-card-date">
                        {this.props.taskDate}
                        </div>
                     </div>
                     <div className="card-buttons">
                        Coming soon: details and edit
                     </div>
             </div>
        )
    }
}

// "task" on line 8 here is created as a new prop from "chores.task" on line 12 of TaskCard.
