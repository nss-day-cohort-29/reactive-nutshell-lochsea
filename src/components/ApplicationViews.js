import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// Hannah: added import to pass props to task components:
import TaskManager from "./todo/TaskManager";


export default class ApplicationViews extends Component {


state = {
  tasks: []
}

//=============================================   Tasks Hook  ===============================================================

// componentDidMount() {
//     const newState = {}

// Example code. Make this fit into how you have written yours.
// AnimalManager.getAll().then(allAnimals => {
//     this.setState({
//         animals: allAnimals
//     })
// })

componentDidMount() {
  const newTaskState = {
    TaskManager.getAll()
    .then(allTasks => {
      this.setState({
        tasks: allTasks
      })
    })
  }
}
//============================================================================================================

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return <TaskList tasks={this.state.tasks} />
          }}
        />
        <Route
        exact path="/events" render={props => {
            return null
            // Remove null and return the component which will show events
          }}
        />
      </React.Fragment>
    );
  }
}
