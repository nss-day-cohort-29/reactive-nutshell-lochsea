import React, { Component } from "react"

export default class TaskForm extends Component {

    state = {
        taskName: "",
        task: "",
        taskDate: ""
    };

    // Create a new task object:
    createNewTask = evt => {
        evt.preventDefault();
        const newTask = {
            name: this.state.taskName,
            task: this.state.task,
            date: this.state.taskDate,
            //Connect the right task with the right id:
            // taskId: this.props.task.find(
            //     newTaskItem => newTaskItem.name === this.state.task).id
            taskId: this.state.task.id
        };

        this.props.addTask()
        // Redirect user to TaskList:
        // this.props.post(newTask)
        // .then(() => this.props.history.push("/tasks"));
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
                <div>
                    <label htmlFor="taskDate">When Do You Expect This Task To Be Finished?</label>
                    <input type="date" required className="task-form-date" id="taskDueDate"/>
                </div>
                <button type="submit" onClick={this.createNewTask} className="task-form-submit-btn">Submit</button>
            </form>
        </React.Fragment>
        );
    }
}
