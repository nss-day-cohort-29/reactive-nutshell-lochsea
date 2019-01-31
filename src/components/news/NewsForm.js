import React, { Component } from "react"

export default class NewsForm extends Component {
  state = {
   title: "",
   synopsis: "",
    url: ""
  }
  handleFieldChange = (evt) => {
    evt.preventDefault()
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  constructNews = (evt) => {
    evt.preventDefault()
    const newNews = {
      title: this.state.title,
      synopsis: this.state.synopsis,
      url: this.state.url
    }
      this.props.addNews(newNews)
        .then(() => this.props.history.push("/"))
      }
      render() {
        return (
      <React.Fragment>
        <form>
          <div>
            <label htmlFor="newsTitle">News title</label>
            <input type="text" required id="title"
             onChange={this.handleFieldChange}
            />
          </div>
          <div>
            <label htmlFor="Synopsis">Synopsis</label>
            <input type="text" required id="synopsis"
             onChange={this.handleFieldChange}
            />
          </div>
          <div>
            <label htmlFor="URL">URL</label>
            <input type="text" required id="url"
             onChange={this.handleFieldChange}
            />
          </div>
          <button type="Save" onClick={this.constructNews} > Submit </button>
        </form>
      </React.Fragment>
    );
  }
}