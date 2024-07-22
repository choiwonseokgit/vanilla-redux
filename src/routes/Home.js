import React, { useState } from "react";
import ToDo from "../components/ToDo";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store";

function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClick = () => {
    const id = Date.now();
    dispatch(add({ text, id }));
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    add(text);
    setText("");
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
