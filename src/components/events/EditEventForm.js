import React, { Component } from "react"
import "./Events.css"
import EventsManager from "../events/EventsManager"

export default class EditEventForm extends Component {
    // Set initial state
    state = {
        eventName: "",
        eventDate: "",
        eventLocation: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    updateExistingStudent = evt => {
        evt.preventDefault()

        const editedEventObject = {
            name: this.state.eventName,
            date: this.state.eventDate,
            location: this.state.eventLocation
        }

    this.props.updateEvent(this.props.match.params.eventId, editedEventObject)
    .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
    EventsManager.getEvent(this.props.match.params.eventId)
    .then(event => {
        this.setState({
        name: event.name,
        date: event.date,
        location: event.location
        });
    });
    }

    render() {
        return (
            <React.Fragment>
                <form className="eventForm">
                    <div className="form-group">
                        <h1>Edit Your Event</h1>
                        <label htmlFor="eventName">Event Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="eventName"
                               placeholder="Event Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Date</label>
                        <input type="text" required
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
                    <button type="submit" onClick={this.editedEventObject}  className="btn btn--event--submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}