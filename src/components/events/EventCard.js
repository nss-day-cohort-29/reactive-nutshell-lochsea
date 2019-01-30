import React, { Component } from "react"
import "./Events.css"
import { Link } from "react-router-dom";

export default class EventCard extends Component {
    render() {
        return (
            <div key={this.props.eventItem.id} className="event--id">
                <div className="event--entry">
                    <h2 className="event--name" label="Event">
                        {this.props.eventItem.name}
                    </h2>
                    <p className="event--date" label="Date">
                        {this.props.eventItem.date}
                    </p>
                    <p className="event--location" label="Location">
                        {this.props.eventItem.location}
                    </p>

                    {/* onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</a> */}
                    <Link className="nav-link" to={`/events/${this.props.eventItem.id}/edit`}>Edit</Link>
                </div>
            </div>
        )
    }
}