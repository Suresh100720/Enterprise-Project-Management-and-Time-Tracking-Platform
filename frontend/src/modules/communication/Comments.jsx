import React, { useState } from "react";
import { Input, Button, List } from "antd";

function Comments() {

  const [commentsArray, setCommentsArray] = useState([]);
  const [commentInputValue, setCommentInputValue] = useState("");

  const addComment = () => {

    if (!commentInputValue) return;

    setCommentsArray([
      ...commentsArray,
      commentInputValue
    ]);

    setCommentInputValue("");
  };

  return (
    <div>

      <h2>Task Comments</h2>

      <List
        bordered
        dataSource={commentsArray}
        renderItem={(commentItem) => (
          <List.Item>{commentItem}</List.Item>
        )}
        style={{ marginBottom: 20 }}
      />

      <Input
        placeholder="Write comment"
        value={commentInputValue}
        onChange={(eventObject) =>
          setCommentInputValue(eventObject.target.value)
        }
      />

      <Button
        type="primary"
        onClick={addComment}
        style={{ marginTop: 10 }}
      >
        Add Comment
      </Button>

    </div>
  );
}

export default Comments;