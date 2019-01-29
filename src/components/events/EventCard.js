import React, { Component } from "react"
import "./Events.css"

export default class EventCard extends Component {
    render() {
        return (
            <div key={this.props.event.id} className="event--id">
                <div className="event--entry">
                    <h2 className="event--name" label="Event">
                        {this.props.event.name}
                    </h2>
                    <p className="event--date" label="Date">
                        {this.props.event.date}
                    </p>
                    <p className="event--location" label="Location">
                        {this.props.event.location}
                    </p>
                    <button type="edit" onClick={this.constructNewEvent} className="btn btn--event--edit">Submit</button>
                    {/* onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</a> */}
                </div>
            </div>
        )
    }
}