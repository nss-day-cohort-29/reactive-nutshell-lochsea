import React, { Component } from "react"
import "./Events.css"
import EventCard from "./EventCard.js"

export default class EventsList extends Component {
    render () {
        //functionality to only render a specific users events only for their user id number
        // this.props.events.users.id.forEach(id => {
        //     if(id === 1) {

                return (
                    <React.Fragment>
                    <div className="eventsContainer">
                    {

                        this.props.events.map(event =>
                        <EventCard key={event.id} eventItem={event} {...this.props} />
                        )
                    }
                    </div>
                    <div className="addEventButton">
                            <button type="button"
                                    className="btn btn--event--submit"
                                    onClick={() => {
                                        console.log(this.props)
                                        this.props.history.push("/events/new")
                                    }
                                    }>
                                Add Event
                            </button>
                        </div>
                    </React.Fragment>
                )
            }
    }
