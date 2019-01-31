import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import NewsList from "./news/NewsList"
import NewsForm from "./news/NewsForm"
import NewsEditForm from "./news/NewsEditForm"
import NewsManager from "./news/NewsManager"
import TaskManager from "./todo/TaskManager";
import TaskList from "./todo/TaskList";
import TaskForm from "./todo/TaskForm";
import EventsList from "./events/EventsList";
import NewEventForm from "./events/NewEventForm";
import EditEventForm from "./events/EditEventForm";
import EventsManager from "./events/EventsManager"

export default class ApplicationViews extends Component {
  state = {
    news: [],
    tasks: [],
    events: [],
    users: []
   }

   addNews = (article) =>{
    NewsManager.post(article)
      .then(() => NewsManager.getAll())
      .then(news =>
        this.setState({
          news: news
        })
      )
      }

      updateNews = (newsId, editedNewsObj) => {
        return NewsManager.put(newsId, editedNewsObj)
        .then(() => NewsManager.getAll())
        .then(news => {
          this.setState({
            news: news
          })
        });
      }

      postEvent = (newEventObject) => EventsManager.post(newEventObject)
      .then(() => EventsManager.getAll())
      .then(events => this.setState({
          events: events
          })
      )

      addTask = (taskItems) => {
        TaskManager.post(taskItems)
          .then(() => TaskManager.getAll())
          .then(taskItems =>
            this.setState({
              tasks: taskItems
            })
          )
        }
      updateEvent = (eventId, editedEventObject) => {
        return EventsManager.put(eventId, editedEventObject)
        .then(() => EventsManager.getAll())
        .then(events => {
          this.setState({
            events: events
          })
        });
      }

      deleteEvent = (id) => {
        return EventsManager.removeAndList(id)
        .then(() => EventsManager.getAll())
        .then(events => this.setState({
            events: events
        }))
    }

  componentDidMount() {

    NewsManager.getAll().then(allNews => {
      this.setState({
        news: allNews
      })
    })

    EventsManager.getAll().then(allEvents => {
        this.setState({
            events: allEvents
        })
    })

    TaskManager.getAll().then(allTasks => {
      // console.log(allTasks);   Logs the database "tasks" array to the console.
      this.setState({
        tasks: allTasks
      })
    })

  }

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return ( <NewsList  news={this.state.news} /> )
          }}
        />
        <Route
          path="/new" render={props => {
            return ( <NewsForm {...props} updateNews={this.updateNews} news={this.state.news} /> )
          }}
        />
        <Route
          path="/news/:newsId(\d+)/edit" render={props => {
            return <NewsEditForm {...props} updateNews={this.updateNews}/>
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route path="/tasks" render={props => {
          return( <TaskList {...props} todos={this.state.tasks}/>
            )
        }}
        />

        <Route path="/tasks/new" render={props => {
    return( < TaskForm {...props} addTask={this.addTask}/>
      )
        }}
        />
          <Route
        exact path="/events" render={props => {
            return ( <EventsList {...props} events = {this.state.events} users = {this.state.users} /> )
          }}
          />

        <Route
        path="/events/new" render={props => {
            return ( <NewEventForm {...props} postEvent = {this.postEvent} /> )
          }}
          />

        <Route
        path="/events/:eventId(\d+)/edit" render={props => {
            return ( <EditEventForm {...props} updateEvent = {this.updateEvent} deleteEvent = {this.deleteEvent} /> )
          }}
        />
      </React.Fragment>
    );
  }
}
