import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import moment from "moment";

import { Title } from "../../components/Title/Title.js";
import { Comment } from "../../components/Comment/Comment.js";
import { Input } from "../../components/Input/Input.js";

import {
  GetCommentsAction,
  CreateCommentAction,
} from "../../store/thunks/commentThunk.js";

export const Blog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id, title, content, publishAt, user } = location.state.blog;
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  const handleGetBlogs = useCallback(async () => {
    const result = await dispatch(GetCommentsAction({ blogId: id }));
    result.comments.map((i) => (i.blogId = id));
    setComments(result.comments);
  }, [dispatch, id]);

  useEffect(() => {
    handleGetBlogs();
  }, [handleGetBlogs]);

  async function sendComment() {
    await dispatch(CreateCommentAction({ content: comment, blogId: id }));
    handleGetBlogs();
    setComment("");
  }
  return (
    <>
      <div className="blog-view">
        <div className="title-box">
          <Title name={`(${id}) ${title}`} />
          <p>Published {moment(publishAt).fromNow()}</p>
        </div>
        <div className="blog-container">
          <p>{content}</p>
          <p>
            <strong>
              By: {`${user.names} ${user.lastNames ? user.lastNames : ""}`}
            </strong>
          </p>
        </div>
        <div className="new-comment-section">
          <Input
            label="Add comment"
            name="comment"
            type="text"
            value={comment}
            setState={setComment}
          />
          <div className="comment-reply-button">
            <button onClick={() => sendComment()}>Send</button>
          </div>
        </div>
        <div className="comments-section">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              data={comment}
              refreshComments={handleGetBlogs}
            />
          ))}
        </div>
      </div>
    </>
  );
};
