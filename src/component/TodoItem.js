import Reacr from "react";
import Button from "./Button";

const TodoItem = ({ todo, del, open, isDelete, openDel }) => {
  return (
    <div style={todoItem}>
      <p>{todo.title}</p>
      <div>
        <Button
          text="Edit"
          variant="success"
          action={() => open(todo.id, todo.title)}
        />
        <Button
          text="Delete"
          variant="warning"
          action={openDel}
          del={del}
          // action={() => del(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;

const todoItem = {
  background: "#2da4f8",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};
