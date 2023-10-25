import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Input from "../Input/Input";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import {
  CreateCommentAction,
  UpdateCommentAction,
  DeleteCommentAction,
} from "../../store/thunks/commentThunk";

export const Comment = ({ data, refreshComments }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const userState = useSelector((state) => state.auth);
  async function sendComment(item) {
    await dispatch(
      CreateCommentAction({
        content: comment,
        blogId: item.blogId,
        commentId: item.id,
      })
    );
    refreshComments();
    setComment("");
    setOpenReplyModal(false);
  }
  async function updateComment(item) {
    await dispatch(
      UpdateCommentAction({
        content: comment,
        blogId: item.blogId,
        commentId: item.id,
      })
    );
    refreshComments();
    setComment("");
    setOpenUpdateModal(false);
  }
  async function deleteComment(item) {
    await dispatch(DeleteCommentAction({ commentId: item.id }));
    refreshComments();
    setComment("");
    setOpenDeleteModal(false);
  }
  function handleOpenReplyModal(item) {
    setComment("");
    setOpenReplyModal(true);
  }
  function handleOpenUpdateModal(item) {
    setComment(item.content);
    setOpenUpdateModal(true);
  }
  function handleOpenDeleteModal(item) {
    setOpenDeleteModal(true);
  }
  return (
    <div className="comment">
      <div className="comment-text-box">
        <div>
          <p className="comment-date">
            {moment(data.createdAt).format("YYYY-MM-DD hh:mm:ss a")}
          </p>
          <p>
            <strong>
              {data.user.names} {data.user.lastNames}
            </strong>
            : {data.content}
          </p>
        </div>
        <div>
          <button onClick={() => handleOpenReplyModal()}>Reply</button>
          {userState && userState.user.id === data.user.id && (
            <>
              <button onClick={() => handleOpenUpdateModal(data)}>Edit</button>
              <button onClick={() => handleOpenDeleteModal()}>Delete</button>
            </>
          )}
        </div>
      </div>

      {data.replies && data.replies.length > 0 && (
        <div className="replies">
          {data.replies.map((reply) => (
            <Comment
              key={reply.id}
              data={reply}
              refreshComments={refreshComments}
            />
          ))}
        </div>
      )}
      <Modal open={openReplyModal} handleClose={() => setOpenReplyModal(false)}>
        <div className="modal-reply-content">
          <h2>Do you want to reply?</h2>
          <Input
            label="Reply"
            name="comment"
            type="text"
            value={comment}
            setState={setComment}
          />
          <div className="">
            <Button
              label="Send"
              variant="primary"
              onClick={() => sendComment(data)}
            />
            <Button
              label="Cancel"
              variant="primary"
              onClick={() => setOpenReplyModal(false)}
            />
          </div>
        </div>
      </Modal>
      <Modal
        open={openUpdateModal}
        handleClose={() => setOpenUpdateModal(false)}
      >
        <div className="modal-reply-content">
          <h2>Update comment</h2>
          <Input
            label="Comment"
            name="comment"
            type="text"
            value={comment}
            setState={setComment}
          />
          <div className="">
            <Button
              label="Send"
              variant="primary"
              onClick={() => updateComment(data)}
            />
            <Button
              label="Cancel"
              variant="primary"
              onClick={() => setOpenUpdateModal(false)}
            />
          </div>
        </div>
      </Modal>
      <Modal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
      >
        <div className="modal-reply-content">
          <h2>Delete comment</h2>
          <p>This action is irreversible, are you sure?</p>

          <div className="">
            <Button
              label="Continue"
              variant="primary"
              onClick={() => deleteComment(data)}
            />
            <Button
              label="Cancel"
              variant="primary"
              onClick={() => setOpenDeleteModal(false)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
