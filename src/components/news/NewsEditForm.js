import React, { Component } from "react"
import NewsManager from "./NewsManager"

export default class NewsEditForm extends Component {

    state = {
        title: "",
        synopsis: "",
        url: ""
       }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingNews = evt => {
      evt.preventDefault()

      const existingNews = {
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url
      }

    this.props.updateNews(this.props.match.params.newsId, existingNews)
    .then(() => this.props.history.push("/"))      
    }

    componentDidMount() {
      NewsManager.get(this.props.match.params.newsId)
      .then(news => {
        this.setState({
            title: news.title,
            synopsis: news.synopsis,
            url: news.url
        });
      });
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" required id="title" value = {this.state.title}
                          onChange={this.handleFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="synopsis">Synopsis</label>
                        <input type="text" required id="synopsis" value={this.state.synopsis}
                          onChange={this.handleFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="url">url</label>
                        <input type="text" required id="url" value={this.state.url}
                          onChange={this.handleFieldChange}
                           />
                    </div>
                    
                    <button type="submit" onClick={this.updateExistingNews} >Submit</button>
                </form>
            </React.Fragment>
        )
    }
}