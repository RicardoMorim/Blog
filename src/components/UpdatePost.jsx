import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
const { TextArea } = Input;
import db from "../../firebase.js";
import { navigate } from "@reach/router";

const UpdatePost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    let postRef = db
      .collection("users")
      .doc(props.user.uid)
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

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);

  const onEditPost = () => {
    let payload = { title, content };
    let postRef = db
      .collection("users")
      .doc(props.user.uid)
      .collection("posts")
      .doc(props.id);

    postRef
      .update(payload)
      .then((docRef) => {
        console.log(
          `Post Updated successfully! Id: ${docRef.id}. New Values: `,
          {
            title,
            content,
          }
        );
      })
      .catch((error) => {
        console.error(`There was an error posting the post: ${error}`);
      });

    navigate(`/posts`);
  };

  return (
    <div className="create_post_container">
      <div className="page_header_container">
        <h1 className="posts_title"> Update Post </h1>
      </div>

      <div className="post_inputs_container">
        <div className="post_input_container">
          <div>
            <h2>Post Title</h2>
          </div>

          <div className="post_input_value">
            <Input
              placeholder="Post Title"
              value={title}
              id="title"
              onChange={onTitleChange}
            />
          </div>
        </div>

        <div className="post_input_container">
          <div>
            <h2>Post Content</h2>
          </div>

          <div className="post_input_value">
            <TextArea
              id="content"
              rows={10}
              value={content}
              onChange={onContentChange}
            />
          </div>
        </div>

        <div className="post_input_button">
          <Button type="primary" size="large" onClick={onEditPost}>
            {" "}
            Edit Post{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
