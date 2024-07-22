import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const { id } = useParams();
  const toDo = toDos.reducer.find((toDo) => toDo.id === parseInt(id));

  return (
    <div>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {Date(toDo?.id)}</h5>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
