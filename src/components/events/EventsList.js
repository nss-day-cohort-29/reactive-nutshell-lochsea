import React, { Component } from "react"
import "./Events.css"
import EventCard from "./EventCard.js"

export default class EventsList extends Component {
    render () {

    this.props.events.sort(function(a,b) {return new Date(a.date) - new Date(b.date);
        });
        // let firstDiv = document.querySelector(".event--id")
        // firstDiv.setAttribute("class", "event--id--first")

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
        );
    }
}