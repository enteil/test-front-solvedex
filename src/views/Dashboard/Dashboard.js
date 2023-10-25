import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "../../components/Title/Title.js";
import { GetPublicBlogsAction } from "../../store/thunks/blogThunks.js";
import BlogCard from "../../components/BlogCard/BlogCard.js";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const handleGetBlogs = async () => {
      const result = await dispatch(GetPublicBlogsAction());
      setBlogs(result.blogs);
    };
    handleGetBlogs();
  }, [dispatch]);

  function redirectToBlog(blog) {
    navigate("/dashboard/blog", { state: { blog } });
  }

  return (
    <>
      <div>
        <div className="title-box">
          <Title name="Blogs" />
        </div>
        <div className="blogs-container">
          {blogs.map((blog, index) => (
            <div key={index} onClick={() => redirectToBlog(blog)}>
              <BlogCard
                title={blog.title}
                publishAt={blog.publishAt}
                summary={blog.summary}
                comments={blog.comments}
                user={blog.user}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
