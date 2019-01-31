import React, { Component } from "react"

export default class TaskForm extends Component {

    state = {
        taskName: "",
        task: "",
        taskDate: ""
    };

    handleTaskField = evt => {
        const taskStateToChange = {};
        console.log(evt.target.id, evt.target.value);
        //This will show in the console what the user is typing in the form fields
        //Also, note that the "id" here is referring to the HTML element ids in our render() below, not the database ids.
        taskStateToChange[evt.target.id] = evt.target.value;
        this.setState(taskStateToChange);
    }

    // Create a new task object:
    createNewTask = evt => {
        evt.preventDefault();
        const newTask = {
            taskName: this.state.taskName,
            task: this.state.task,
            taskDate: this.state.taskDate,
            //Connect the right task with the right id:
            // taskId: this.props.task.find(
            //     newTaskItem => newTaskItem.name === this.state.task).id
            // taskId: this.state.task.id
        };

        this.props.addTask(newTask).then(() => this.props.history.push("/tasks"));
        // Redirect user to TaskList
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
                    <input type="text" required className="task-form-input" id="taskName" placeholder="Task Name" onChange={this.handleTaskField}/>
                </div>
                <div>
                    <label htmlFor="taskDescription">Task Description</label>
                    <input type="text" required className="task-form-input" id="task" placeholder="Describe Task" onChange={this.handleTaskField}/>
                </div>
                <div>
                    <label htmlFor="taskDate">When Do You Expect This Task To Be Finished?</label>
                    <input type="date" required className="task-form-date" id="taskDate" onChange={this.handleTaskField}/>
                </div>
                <button type="submit" onClick={this.createNewTask} className="task-form-submit-btn">Submit</button>
            </form>
        </React.Fragment>
        );
    }
}
