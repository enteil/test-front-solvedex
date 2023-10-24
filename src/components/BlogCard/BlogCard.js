import { SubTitle } from "../Title/Sub-Title";
import moment from "moment";
const BlogCard = (props) => {
  const { title, publishAt, summary, comments, user } = props;
  return (
    <>
      <div className="blog-card-box">
        <div className="blog-card-title">
          <div>{moment(publishAt).fromNow()}</div>
        </div>
        <div className="blog-card-content">
          <SubTitle name={title} />
          <div>{summary}</div>
        </div>
        <div className="blog-card-content">
          <SubTitle name={title} />
          <div>{summary}</div>
        </div>
        <div className="blog-card-footer">
          <div>Comments: {comments}</div>
          <div>
            Blog author
            {`Wellcome ${user.names} ${user.lastNames ? user.lastNames : ""}`}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
