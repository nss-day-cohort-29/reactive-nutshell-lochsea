import React, { Component } from "react"
import { Link } from "react-router-dom";

export default class TaskCard extends Component {
    render() {
        // console.log(this.props);
        return (
            <React.Fragment>
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
             {/* The button belongs in TaskList but for now it is in this component because it works here; I will move to TaskList once the functionality is down. */}
             {/* <div>
                 <button type="submit" className="add-task-btn">
                    <Link className="route-to-form" to={`/tasks/new/${this.props.task.id}`}/>
                    Create New Task!
                 </button>
             </div> */}
             </React.Fragment>
        )
    }
}

// "task" on line 8 here is created as a new prop from "chores.task" on line 12 of TaskCard.
