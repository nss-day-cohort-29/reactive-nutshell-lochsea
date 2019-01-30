import React, { Component } from "react"
// import TaskCard from "./TaskCard"
// todos is: {ApplicationViews.state.tasks}
class TaskList extends Component {
    render() {
        console.log(this.props.todos)
        return(
            this.props.todos.map(chores =>
            <div key={chores.id}>
                  <div className="card-body">
                      <h5 className="card-title">
                          {chores.task}
                      </h5>
                    </div>
            </div>
        ))
    }
}
export default TaskList