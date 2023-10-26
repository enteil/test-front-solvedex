// NotFound.js
import React from "react";

export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="error-code">404</div>
      <div className="error-text">Page Not Found</div>
      <div className="error-description">
        The page you're looking for doesn't exist or has been moved.
      </div>
    </div>
  );
};
