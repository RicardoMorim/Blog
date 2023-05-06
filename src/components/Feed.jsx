import React, { useEffect, useState } from "react";
import _ from "lodash";
import { PostSnippet } from "./PostSnippet";
import db from "../../firebase";

const Feed = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postRef = db.collection("posts");

    postRef.onSnapshot(async (posts) => {
      let postsData = await posts.docs.map((post) => {
        let data = post.data();
        let { id } = post;

        let payload = {
          id,
          ...data,
        };

        return payload;
      });
      setPosts(postsData);
    });
  }, []);

  return (
    <div className="posts_container">
      <div className="page_header_container">
        <h1 className="posts_title"> Feed </h1>
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
              user={props.user}
              uid={props.uid}
              feed={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
