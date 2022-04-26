import React from "react";

export default function Alert({ error, successMessage }) {
  return (
    <div
      className={`alert ${error && `alert-danger`} ${
        successMessage && `alert-success`
      } `}
      role="alert"
    >
      {error && error}
      {successMessage && successMessage}
    </div>
  );
}
