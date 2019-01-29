import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class NewsList extends Component {
    render() {
        return (
          <section>
            {this.props.news.map(article => (
              <div key={article.id}>
                   <p> {article.title} </p>
                   <p> {article.synopsis} </p>
                   <p> {article.url}</p>
                   <Link to={`/news/${article.id}/edit`}>Edit</Link>
              </div>
            ))}
          </section>
        );
      }
    }