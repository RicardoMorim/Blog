import React from "react";
import { Card } from "antd";
import Post from "./Post";
import { Link } from "@reach/router";

export const PostSnippet = (props) => {
  return (
    <div className="post_snippet_container">
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={props.title}
        extra={
          <div className="post_snippet_links">
            <Link to={`/post/${props.id}/`} style={{ marginRight: "15px" }}>
              Read Full Article
            </Link>
            <Link to={`/update_post/${props.id}/`}>Edit</Link>
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
