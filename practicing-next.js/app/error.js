"use client";

const error = ({ error, reset }) => {
  return <div>{error.message}</div>;
};

export default error;
