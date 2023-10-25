import { SubTitle } from "../Title/Sub-Title";
import moment from "moment";
export const BlogMine = (props) => {
  const { title, publishAt, summary, comments } = props;
  return (
    <>
      <div className="blog-card-box-mine">
        <div className="blog-card-title">
          <SubTitle name={title} />
        </div>
        <div className="blog-card-content">
          <p>{summary}</p>
        </div>
        <div className="blog-card-footer">
          <p>Published {moment(publishAt).fromNow()}</p>

          <p>Comments: {comments}</p>
        </div>
      </div>
    </>
  );
};
