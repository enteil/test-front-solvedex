import { SubTitle } from "../Title/Sub-Title";
export const EmptyCard = () => {
  return (
    <>
      <div className="blog-card-box-empty">
        <div className="blog-card-title">
          <SubTitle name="Create new blog +" />
        </div>
        <div className="blog-card-content"></div>

        <div className="blog-card-footer"></div>
      </div>
    </>
  );
};
