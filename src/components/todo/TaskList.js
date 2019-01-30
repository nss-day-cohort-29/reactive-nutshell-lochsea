import React, { Component } from "react";
import TaskCard from "./TaskCard"
// todos is: {ApplicationViews.state.tasks}
class TaskList extends Component {
    render() {
        // console.log(this.props.todos)
        return (
            <React.Fragment>
            <div className="task-list-container">
            {
                this.props.todos.map(task =>

                // <div key={errands.id} errands={errands} {...this.props}/> // Adding ...this.props makes TaskList props available to other components
                //this.props.todos.map =
                // TaskList.properties.ApplicationViews.state.tasks = []
                // Makes a new array out of tasks
                // We need this .map of tasks to match the one in the db.json:
                // "tasks": [ { id: "", userId: "", task: ""}]

            <TaskCard key={task.id} task-item={task} {...this.props} />
            )
        }
        </div>
        </React.Fragment>
        );
    }
}
export default TaskList


{/* <React.Fragment>
<div className="eventsContainer">
{
    this.props.events.map(event =>
    <EventCard key={event.id} event={event} {...this.props} />
    ) */}
