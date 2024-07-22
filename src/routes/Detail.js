import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const toDos = useSelector((state) => state);
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <div>
      <h1>{toDo.text}</h1>
      <h5>Created at: {Date(toDo.id)}</h5>
    </div>
  );
}

export default Detail;
