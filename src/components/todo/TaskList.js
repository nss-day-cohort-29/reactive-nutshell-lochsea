import React, { Component } from "react"
import TaskCard from "./TaskCard"
// todos is: {ApplicationViews.state.tasks}
class TaskList extends Component {
    render() {
            // <div>
            //     <button type="submit" className="add-task-btn">
            //         Create New Task!
            //     </button>
            // </div>
            // The "Add New" button should be in the TaskList, not cards; we don't want it to display on every single card. But as of ~12:37 on 1/30/19, I can't figure out how to add it here. Therefore, I added it to TaskCards (because it works there) in order to work on the functionality and I will move it into this component once that is set up.

            //Log "todos" to the console to see what it gives us:
            // console.log(this.props.todos)
        return(

            <React.Fragment>

            <section>
                {this.props.todos.map(chores =>
                <div key={chores.id}>
                    < TaskCard key={chores.id} task={chores.task} taskName={chores.taskName} taskDate={chores.taskDate} {...this.props}/>
                </div>
                )}
        </section>
        </React.Fragment>
        )
    }
}
export default TaskList
