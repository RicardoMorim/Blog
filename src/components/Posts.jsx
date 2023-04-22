import React from "react";
import { Post } from "./Post";
import api from "../shared/mock_api";
import _ from "lodash";

function Posts(props) {
  return (
    <div className="posts_container">
      <div className="page_header_container">
        <h1 className="posts_title"> Posts </h1>
      </div>

      <div className="articles_container">
        <div className="article_container">
          {_.map(api, (article) => {
            console.log(article);
            return (
              <Post
                key={article.id}
                title={article.title}
                message={article.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
