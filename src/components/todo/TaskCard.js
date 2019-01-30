import React, { Component } from "react"
import TaskList from "./TaskList"

class TaskCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div key={this.props.task.id} className="card">
                    <div className="card-body">
                        <h5 ClassName="card-header">{this.props.task.task}</h5>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TaskCard