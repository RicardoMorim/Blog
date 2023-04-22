import React from "react";
import { Card } from "antd";

export const Post = (props) => {
  return (
    <div className="article_container">
      <Card type="inner" title={props.title} style={{ marginTop: 16 }}>
        <p>
          {props.message}
        </p>
      </Card>
    </div>
  );
};
