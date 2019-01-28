import React, { Component } from "react"
import "./Events.css"

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

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    editEvent = evt => {
        evt.preventDefault()
        if (this.state.events === "") {
            window.alert("Please complete all fields")
        } else {
            const editedEventObject = {
                name: this.state.eventName,
                date: this.state.eventDate,
                location: this.state.eventLocation
            }
            console.log("test object creation", editedEventObject)
            // Create the event and redirect user to event list
            // this.props.addEvent(editedEventObject).then(() => this.props.history.push("/events"))
        }
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
                    <button type="submit" onClick={this.editEvent}  className="btn btn--event--submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}