import React, { useState } from "react";
import { Input, Button } from "antd";
const { TextArea } = Input;
import db from "../../firebase.js";
import { navigate } from "@reach/router";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);
  const onCreatePost = () => {
    let payload = { title, content };
    let postRef = db
      .collection("users")
      .doc(props.user.uid)
      .collection("posts");

    postRef
      .add(payload)
      .then((docRef) => {
        console.log(`Post sent successfully! Id: ${docRef.id}`, {
          title,
          content,
        });
      })
      .catch((error) => {
        console.error(`There was an error posting the post: ${error}`);
      });

    setTitle("");
    setContent("");

    navigate(`/posts`);
  };

  return (
    <div className="create_post_container">
      <div className="page_header_container">
        <h1 className="posts_title"> Create Post </h1>
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
          <Button type="primary" size="large" onClick={onCreatePost}>
            {" "}
            Create Post{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
