import React, { useEffect, useState } from "react";
import _ from "lodash";
import { PostSnippet } from "./PostSnippet";
import db from "../../firebase";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postRef = db.collection("posts");
    postRef.get().then((posts) => {
      posts.forEach((post) => {
        let data = post.data();
        let id = post.id;

        let payload = {
          id,
          ...data,
        };

        setPosts((posts) => {
          return [...posts, payload];
        });
      });
    });
  }, []);

  return (
    <div className="posts_container">
      <div className="page_header_container">
        <h1 className="posts_title"> Posts </h1>
      </div>

      <div className="articles_container">
        {_.map(posts, (article, id) => {
          console.log(article);
          return (
            <PostSnippet
              key={id}
              id={article.id}
              title={_.capitalize(article.title)}
              message={article.content
                .substring(0, 1000)
                .concat(article.content.length > 1000 ? "..." : "")}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
