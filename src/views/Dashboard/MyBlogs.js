import { Title } from "../../components/Title/Title.js";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  GetMineBlogsAction,
  CreateBlogAction,
  UpdateBlogAction,
  DeleteBlogAction,
} from "../../store/thunks/blogThunks.js";
import { EmptyCard } from "../../components/EmptyCard/EmptyCard.js";
import { BlogMine } from "../../components/BlogMine/BlogMine.js";
import { Modal } from "../../components/Modal/Modal.js";
import { Input } from "../../components/Input/Input.js";
import { TextArea } from "../../components/TextArea/TextArea.js";
import { Button } from "../../components/Button/Button.js";
import { Checkbox } from "../../components/Checkbox/Checkbox.js";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export const MyBlogs = () => {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  const [openCreateBlogModal, setOpenCreateBlogModal] = useState(false);
  const [openUpdateBlogModal, setOpenUpdateBlogModal] = useState(false);
  const [openDeleteBlogModal, setOpenDeleteBlogModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [id, setId] = useState("false");

  const handleGetBlogs = useCallback(async () => {
    const result = await dispatch(GetMineBlogsAction());
    setBlogs(result.blogs);
  }, [dispatch]);
  function clearData() {
    setId("");
    setTitle("");
    setContent("");
    setSummary("");
    setIsPublic(false);
  }
  useEffect(() => {
    handleGetBlogs();
  }, [handleGetBlogs]);

  async function CreateBlog() {
    const newBlogData = {
      title,
      content,
      summary,
      isPublic,
    };
    await dispatch(CreateBlogAction(newBlogData));
    handleGetBlogs();
    setOpenCreateBlogModal(false);
    clearData();
  }
  async function UpdateBlog() {
    const updateBlogData = {
      blogId: id,
      title: title,
      content: content,
      summary: summary,
      isPublic: isPublic,
    };
    await dispatch(UpdateBlogAction(updateBlogData));
    handleGetBlogs();
    setOpenUpdateBlogModal(false);
    clearData();
  }
  async function DeleteBlog() {
    const deleteBlogData = {
      blogId: id,
    };
    await dispatch(DeleteBlogAction(deleteBlogData));
    handleGetBlogs();
    setOpenDeleteBlogModal(false);
    clearData();
  }
  function OpenUpdateBlogModal(data) {
    setId(data.id);
    setTitle(data.title);
    setContent(data.content);
    setSummary(data.summary);
    setIsPublic(data.isPublic);
    setOpenUpdateBlogModal(true);
  }
  function OpenCreateBlogModal(data) {
    clearData();
    setOpenCreateBlogModal(true);
  }
  function OpenDeleteBlogModal(data) {
    setId(data.id);
    setOpenDeleteBlogModal(true);
  }
  return (
    <>
      <div className="title-box">
        <Title name="My Blogs" />
      </div>

      <div className="blogs-container">
        <EmptyCard onClick={() => OpenCreateBlogModal()} />
        {blogs.map((blog, index) => (
          <div key={index}>
            <div onClick={() => OpenUpdateBlogModal(blog)}>
              <BlogMine
                title={blog.title}
                publishAt={blog.publishAt}
                summary={blog.summary}
                comments={blog.comments}
              />
            </div>
            <button onClick={() => OpenDeleteBlogModal(blog)}>
              <DeleteForeverIcon style={{ color: "white" }} />
            </button>
          </div>
        ))}
      </div>
      <Modal
        open={openCreateBlogModal}
        onClose={() => setOpenCreateBlogModal(false)}
        maxWidth={"md"}
      >
        <div className="craete-blog-box">
          <div className="title-box">
            <Title name={"Create new blog"} />
          </div>
          <div className="create-blog-fields">
            <div>
              <Input
                label="Title"
                name="title"
                type="text"
                value={title}
                setState={setTitle}
              />
              <TextArea
                label="Summary"
                name="summary"
                value={summary}
                setState={setSummary}
              />
              <Checkbox
                label="To post?"
                name="topost"
                checked={isPublic}
                setChecked={setIsPublic}
              />
            </div>
            <div className="content-text">
              <TextArea
                label="Content"
                name="content"
                value={content}
                setState={setContent}
              />
            </div>
          </div>
          <div className="buttons-actions">
            <Button
              label="Create"
              variant="primary"
              onClick={() => CreateBlog()}
            />
            <Button
              label="Cancel"
              variant="primary"
              onClick={() => setOpenCreateBlogModal(false)}
            />
          </div>
        </div>
      </Modal>
      <Modal
        open={openUpdateBlogModal}
        onClose={() => setOpenUpdateBlogModal(false)}
        maxWidth={"md"}
      >
        <div className="craete-blog-box">
          <div className="title-box">
            <Title name={"Edit blog"} />
          </div>
          <div className="create-blog-fields">
            <div>
              <Input
                label="Title"
                name="title"
                type="text"
                value={title}
                setState={setTitle}
              />
              <TextArea
                label="Summary"
                name="summary"
                value={summary}
                setState={setSummary}
              />
              <Checkbox
                label="To post?"
                name="topost"
                checked={isPublic}
                setChecked={setIsPublic}
              />
            </div>
            <div className="content-text">
              <TextArea
                label="Content"
                name="content"
                value={content}
                setState={setContent}
              />
            </div>
          </div>
          <div className="buttons-actions">
            <Button
              label="Update"
              variant="primary"
              onClick={() => UpdateBlog()}
            />
            <Button
              label="Cancel"
              variant="primary"
              onClick={() => setOpenUpdateBlogModal(false)}
            />
          </div>
        </div>
      </Modal>
      <Modal
        open={openDeleteBlogModal}
        onClose={() => setOpenDeleteBlogModal(false)}
      >
        <div className="modal-reply-content">
          <h2>Delete blog</h2>
          <p>This action is irreversible, are you sure?</p>

          <div className="">
            <Button
              label="Continue"
              variant="primary"
              onClick={() => DeleteBlog()}
            />
            <Button
              label="Cancel"
              variant="primary"
              onClick={() => setOpenDeleteBlogModal(false)}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
