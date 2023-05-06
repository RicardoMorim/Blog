import React, { useState, useEffect } from "react";
import { Card } from "antd";
import db from "../../firebase";

const Post = (props) => {
  var [title, setTitle] = useState("");
  var [content, setContent] = useState("");

  useEffect(() => {
    let postRef = db
      .collection("users")
      .doc(props.uid)
      .collection("posts")
      .doc(props.id);

    postRef
      .get()
      .then((doc) => {
        let { title, content } = doc.data();
        setTitle(title);
        setContent(content);
      })
      .catch((error) => {
        console.error(`There was an error fetching the post: ${error}`);
      });
  }, []);

  return (
    <div className="post_container">
      <div className="page_header_container">
        <h1 className="posts_title"> {title} </h1>
      </div>
      <div className="post_content_container">
        <Card style={{ marginTop: "20px" }}>
          {content.split("\n").map((item, i) => {
            return <p key={i}> {item} </p>;
          })}
        </Card>
      </div>
    </div>
  );
};

export default Post;
