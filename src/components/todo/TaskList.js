import React, { Component } from "react";

export default class TaskList extends Component {
    render() {
        // console.log(this.props.todos)
        return (
            <section className="todos">
            <h5>Tasks</h5> {
                this.props.todos.map(errands =>
                <div key={errands.id}>
                {errands.name}
                </div>)
            }
            </section>
        )
    }
}
