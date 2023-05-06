import React from "react";
import { Card } from "antd";
import Post from "./Post";
import { Link } from "@reach/router";
import db from "../../firebase";

export const PostSnippet = (props) => {
  const onDeletePost = () => {
    let postRef = db
      .collection("users")
      .doc(props.user.uid)
      .collection("posts")
      .doc(props.id);

    postRef
      .delete()
      .then(() => {
        console.log("Post deleted!");
      })
      .catch((error) => {
        console.log("There was the folowing error: " + error.message);
      });
  };

  return (
    <div className="post_snippet_container">
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={props.title}
        extra={
          <div className="post_snippet_links">
            <Link
              to={`/blogs/${props.uid}/post/${props.id}`}
              style={{ marginRight: "15px", float: "left" }}
            >
              Read Full Article
            </Link>
            {props.user && (
              <div className="post_edit_links" style={{ float: "right" }}>
                <Link
                  to={`/update_post/${props.id}`}
                  style={{ marginRight: "15px" }}
                >
                  Edit
                </Link>
                <a onClick={onDeletePost}> Delete</a>
              </div>
            )}
          </div>
        }
      >
        <p className="artile_content">
          {props.message.split("\n").map((item, i) => {
            return <p key={i}> {item} </p>;
          })}
        </p>
      </Card>
    </div>
  );
};
