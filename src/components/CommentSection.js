import React, { useState } from "react";

const CommentSection = ({ taskId }) => {
  const [comments, setComments] = useState([
    { id: 1, text: "Great work on this task!", user: "Alice" },
    { id: 2, text: "I have some suggestions.", user: "Bob" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const comment = {
      id: comments.length + 1,
      text: newComment,
      user: "Current User",
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      {comments.length === 0 && <p>No comments yet.</p>}
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p>{comment.text}</p>
          <small>- {comment.user}</small>
        </div>
      ))}
      <div className="add-comment">
        <textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button onClick={handleAddComment}>Submit</button>
      </div>
    </div>
  );
};

export default CommentSection;
