import React, { useState } from "react";
import { Input, Button, List } from "antd";

function ClientComments() {

  const [commentsList, setCommentsList] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const addComment = () => {

    if (!newCommentText) return;

    setCommentsList([
      ...commentsList,
      newCommentText
    ]);

    setNewCommentText("");
  };

  return (
    <div>

      <h2>Project Comments</h2>

      <List
        bordered
        dataSource={commentsList}
        renderItem={(commentItem) => (
          <List.Item>{commentItem}</List.Item>
        )}
        style={{ marginBottom: 20 }}
      />

      <Input
        placeholder="Write comment"
        value={newCommentText}
        onChange={(eventObject) =>
          setNewCommentText(eventObject.target.value)
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

export default ClientComments;