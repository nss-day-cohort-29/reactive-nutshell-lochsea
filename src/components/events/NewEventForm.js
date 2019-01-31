import React, { Component } from "react"
import "./Events.css"

export default class NewEventForm extends Component {
    // Set initial state
    state = {
        eventName: "",
        eventDate: "",
        eventLocation: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewEvent = evt => {
        evt.preventDefault()

        const createEventObject = {
            name: this.state.eventName,
            date: this.state.eventDate,
            location: this.state.eventLocation,
            userId: 99
        }

            // Create the event and redirect user to event list
        this.props.postEvent(createEventObject).then(() => this.props.history.push("/events"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="eventForm">
                <h1>Add A New Event</h1>
                    <div className="form-group">
                        <label htmlFor="eventName">Event Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="eventName"
                               placeholder="Event Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Date</label>
                        <input type="date" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="eventDate" placeholder="Date" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventLocation">Location</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="eventLocation" placeholder="Location" />
                    </div>
                    <button type="submit" onClick={this.constructNewEvent}  className="btn btn--event--submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}