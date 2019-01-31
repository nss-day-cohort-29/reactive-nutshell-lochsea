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
    //object to replace the one being edited
    updateExistingEvent = evt => {
        evt.preventDefault()

        const editedEventObject = {
            name: this.state.eventName,
            date: this.state.eventDate,
            location: this.state.eventLocation,
            userId: this.state.userId
        }
    this.props.updateEvent(this.props.match.params.eventId, editedEventObject)
    .then(() => this.props.history.push("/events"))
    }

    //component which calls my fetch module
    componentDidMount() {
    EventsManager.getEvent(this.props.match.params.eventId)
    .then(event => { console.log(event)
        this.setState({
        eventName: event.name,
        eventDate: event.date,
        eventLocation: event.location,
        userId: event.userId
        });
    });
    }

    render() { console.log(this.props)
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
                               value={this.state.eventName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Date</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="eventDate"
                               value={this.state.eventDate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventLocation">Location</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="eventLocation"
                               value={this.state.eventLocation} />
                    </div>
                    <button type="submit" onClick={this.updateExistingEvent}  className="btn btn--event--submit">Submit</button>
                    {/* <button type="delete" onClick={this.props.deleteEvent(this.props.match.params.eventId)}  className="btn btn--event--delete">Delete</button> */}
                </form>
            </React.Fragment>
        )
    }
}