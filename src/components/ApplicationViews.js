import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// Hannah: added import to pass props to task components:
import TaskManager from "./todo/TaskManager";
import TaskList from "./todo/TaskList";
import EventsList from "./events/EventsList";
import NewEventForm from "./events/NewEventForm";
import EditEventForm from "./events/EditEventForm";
import EventsManager from "./events/EventsManager"

export default class ApplicationViews extends Component {

    state = {
      events: [],
      tasks: []
    }

  postEvent = (newEventObject) => EventsManager.post(newEventObject)
  .then(() => EventsManager.getAll())
  .then(event => this.setState({
      events: event
      })
  )

  componentDidMount() {

    EventsManager.getAll().then(allEvents => {
        this.setState({
            events: allEvents
        })
    })

    TaskManager.getAll().then(allTasks => {
      this.setState({
        tasks: allTasks
      })
    })
}


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

        <Route path="/tasks" render={props => {
          return(<TaskList {...props} todos={this.state.tasks}/>
          );
        }}
        />
          <Route
        exact path="/events" render={props => {
            return ( <EventsList {...props} events = {this.state.events} /> )
          }}
          />

        <Route
        path="/events/new" render={props => {
            return ( <NewEventForm {...props} postEvent = {this.postEvent} /> )
          }}
          />

        <Route
        path="/events/edit" render={props => {
            return ( <EditEventForm {...props} /> )
          }}
        />
      </React.Fragment>
    );
  }
}
