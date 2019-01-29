const remoteURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${remoteURL}/events`).then(e => e.json())
    },

    post(newEventObject) {
        return fetch(`${remoteURL}/events`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEventObject)
        }).then(data => data.json())
      }
    }
