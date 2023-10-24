import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "../../components/Title/Title.js";
import { GetPublicBlogsAction } from "../../store/thunks/blogThunks.js";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);

  const handleGetBlogs = async () => {
    const result = await dispatch(GetPublicBlogsAction({}));
    console.log(
      "🚀 ~ file: Dashboard.js:12 ~ handleGetBlogs ~ result:",
      result
    );
    setBlogs(result.blogs);
  };

  useEffect(() => {
    handleGetBlogs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title name="Blogs" />
      {blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
        </div>
      ))}
    </>
  );
};
