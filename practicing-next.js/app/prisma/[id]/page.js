import React from "react";

const SingleTask = async ({ params }) => {
  const { id } = params;
  return <h2>id {id}</h2>;
};

export default SingleTask;
