import React, { Component } from "react"

export default class NewsForm extends Component {
  state = {
   NewsTitle: "",
   Synopsis: "",
    URL: ""
  }
  handleFieldChange = (evt) => {
    const stateToChange = {}
    console.log(evt.target.id, evt.target.value)
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  constructNews = (evt) => {
      const newNews = {
        NewsTitle: this.state.NewsTitle,
        Synopsis: this.state.Synopsis,
        URL: this.state.URL
      }
      this.props.addNews(newNews)
        .then(() => this.props.history.push("/news"))
    }
  render() {
    return (
      <React.Fragment>
        <form>
          <div>
            <label htmlFor="newsTitle">News title</label>
            <input type="text" required id="newsTitle"
             onChange={this.handleFieldChange}
            />
          </div>
          <div>
            <label htmlFor="Synopsis">Synopsis</label>
            <input type="text" required id="Synopsis"
             onChange={this.handleFieldChange}
            />
          </div>
          <div>
            <label htmlFor="URL">URL</label>
            <input type="text" required id="URL"
             onChange={this.handleFieldChange}
            />
          </div>
          <button type="Save" onClick={this.constructNews} > Submit </button>
        </form>
      </React.Fragment>
    );
  }
}