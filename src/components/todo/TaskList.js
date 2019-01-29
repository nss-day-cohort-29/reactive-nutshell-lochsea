import React, { Component } from "react";

export default class TaskList extends Component {
    render() {
        console.log(this.props.todos)
        return (
            <section className="tasks">
            <h5>
            Tasks
            </h5>
            </section>
        )
    }
}
