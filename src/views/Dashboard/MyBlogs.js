import { Title } from "../../components/Title/Title.js";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetMineBlogsAction } from "../../store/thunks/blogThunks.js";
import { EmptyCard } from "../../components/EmptyCard/EmptyCard.js";
import { BlogMine } from "../../components/BlogMine/BlogMine.js";
export const MyBlogs = () => {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const handleGetBlogs = async () => {
      const result = await dispatch(GetMineBlogsAction());
      setBlogs(result.blogs);
    };
    handleGetBlogs();
  }, [dispatch]);
  return (
    <>
      <div className="title-box">
        <Title name="My Blogs" />
      </div>

      <div className="blogs-container">
        <EmptyCard />
        {blogs.map((blog, index) => (
          <div key={index}>
            <BlogMine
              title={blog.title}
              publishAt={blog.publishAt}
              summary={blog.summary}
              comments={blog.comments}
            />
          </div>
        ))}
      </div>
    </>
  );
};
