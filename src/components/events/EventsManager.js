const remoteURL = "http://localhost:5002"

export default {
  //GET a specific object by querying its id
  getEvent(id) {
    return fetch(`${remoteURL}/events/${id}`).then(e => e.json());
  },
  //GET all objects
  getAll() {
      return fetch(`${remoteURL}/events?_expand=user&userId=1`).then(e => e.json())
  },
  //POST a new object
  post(newEventObject) {
      return fetch(`${remoteURL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEventObject)
      }).then(data => data.json())
    },
    put(eventId, eventObject) {
      return fetch(`${remoteURL}/events/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(eventObject)
      }).then(data => data.json());
      },
      removeAndList(id) {
        return fetch(`${remoteURL}/events/${id}`, {
            method: "DELETE"
        })
      },
  }
