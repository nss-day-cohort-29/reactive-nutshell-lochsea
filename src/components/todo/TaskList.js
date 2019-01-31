import React, { Component } from "react"
import TaskCard from "./TaskCard"
// todos is: {ApplicationViews.state.tasks}
class TaskList extends Component {
    render() {
            //Log "todos" to the console to see what it gives us:
            // console.log(this.props.todos)

            // "todos" comes from AppViews, where it was created as a new prop for this.state.tasks
            // Here, todos is mapped over and the new array is called "chores".
            // "task"={chores.id} is created as a new prop.
            // "task={chores.id}" is essentially:
                //TaskList.properties.AppViews.state.tasks.map
                // Since state in AppViews is state = { tasks: [] }, the map becomes:
                // TaskList.properties.AppViews.state.tasks.map = state: {tasks: [chores= {id: "", name: "", etc.}]}
                // This matches the array in db.json: {tasks: [{id: "", name: "", etc.}]}
                // The only difference is that I refer to it here as "chores" to differentiate the manipulation and passage of "tasks" in this component from all other potential instances of "task" or "tasks"
        return(

            <React.Fragment>

                <div>
                    {
                    this.props.todos.map(chore =>
                    < TaskCard key={chore.id} task={chore}
                    {...this.props}/>
                    )}
                    {/* {console.log(this.props.todos)} */}
                </div>

                    <div className="addNewTask">
                    <button type="button"
                        className="add-new-task-btn"
                        onClick={() => {
                            console.log(this.props)
                            this.props.history.push("/tasks/new")
                            }}
                            >
                        Add New Task
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

export default TaskList
