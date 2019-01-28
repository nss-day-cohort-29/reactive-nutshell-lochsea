import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import EventsList from "./events/EventsList";
import NewEventForm from "./events/NewEventForm";
import EditEventForm from "./events/EditEventForm";

export default class ApplicationViews extends Component {

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
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
        exact path="/events" render={props => {
            return <EventsList />
          }}
          />

        <Route
        path="/events/new" render={props => {
            return <NewEventForm />
          }}
          />

        <Route
        path="/events/edit" render={props => {
            return <EditEventForm />
          }}
          />
      </React.Fragment>
    );
  }
}
