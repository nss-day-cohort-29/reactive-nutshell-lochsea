import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class NewsList extends Component {
    render() {
      console.log(this.props.news)
        return (
          <section>
            {this.props.news.map(article => (
              <div key={article.id}>
                   <p> {article.title} </p>
                   <p> {article.synopsis} </p>
                   <p> {article.url}</p>
                   <a href="#" onClick={() => this.props.deleteNews(article.id)}> Delete </a>
                   <Link to={`/news/${article.id}/edit`}>Edit</Link>
              </div>
            ))}
            {/* {
              <div>
              <button type="button"
                      onClick={() => {this.props.history.push("/new")}
                      }>
                  Add news
              </button>
          </div>
            } */}
          </section>
        );
      }
    }