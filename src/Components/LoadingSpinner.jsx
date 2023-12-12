import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center loading-spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "100px", height: "100px" }}
      ></div>
    </div>
  );
}
