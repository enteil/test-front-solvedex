import { SubTitle } from "../Title/Sub-Title";
export const EmptyCard = ({ onClick }) => {
  return (
    <div className="blog-card-box-empty" onClick={onClick}>
      <div className="blog-card-title">
        <SubTitle name="Create new blog +" />
      </div>
      <div className="blog-card-content"></div>
      <div className="blog-card-footer"></div>
    </div>
  );
};
