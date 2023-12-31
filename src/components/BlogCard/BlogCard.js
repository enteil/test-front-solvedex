import { SubTitle } from "../Title/Sub-Title";
import moment from "moment";
const BlogCard = (props) => {
  const { title, publishAt, summary, comments, user } = props;
  return (
    <>
      <div className="blog-card-box">
        <div className="blog-card-title">
          <SubTitle name={title} />
        </div>
        <div className="blog-card-content">
          <p>{summary}</p>
          <p className="author-name">
            Author:
            {` ${user.names} ${user.lastNames ? user.lastNames : ""}`}
          </p>
        </div>

        <div className="blog-card-footer">
          <p>Published {moment(publishAt).fromNow()}</p>

          <p>Comments: {comments}</p>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
