import React, { Component } from "react"

export default class TaskForm extends Component {

    state = {
        taskName: "",
        task: ""
    };

    // Create a new task object:
    createNewTask = evt => {
        evt.preventDefault();
        const newTask = {
            name: this.state.taskName,
            task: this.state.task,
            //Connect the right task with the right id:
            taskId: this.props.task.find(
                task => task.taskName === this.state.task).id
        };

        // Redirect user to TaskList:
        this.props.addTask(newTask)
        .then(() => this.props.history.push("/tasks"));
    }

render() {
        return(
        // create form elements
        <React.Fragment>
            <form className="task-form">
                <div>
                    <label htmlFor="taskName">
                        Task Name
                    </label>
                    <input type="text" required className="task-form-input" id="taskName" placeholder="Task Name"/>
                </div>
                <div>
                    <label htmlFor="taskDescription">Task Description</label>
                    <input type="text" required className="task-form-input" id="taskDesc" placeholder="Describe Task"/>
                </div>
                <button type="submit" onClick={this.createNewTask} className="task-form-submit-btn">Submit</button>
            </form>
        </React.Fragment>
        );
    }
}
