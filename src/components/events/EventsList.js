import React, { Component } from "react"
import "./Events.css"

export default class EventsList extends Component {
    render () {
        return (
            <React.Fragment>
            <div className="eventsContainer">
                {/* <section>code for adding individual events from json here</section> */}
            </div>
            <div className="addEventButton">
                    <button type="button"
                            className="btn btn--event--submit"
                            onClick={() => {
                                console.log("button test")
                                // this.props.history.push("/events/new")
                            }
                            }>
                        Add Event
                    </button>
                </div>
            </React.Fragment>
        );
    }
}