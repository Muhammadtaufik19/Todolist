import Reacr from "react";
import Button from "./Button";
import SkeletonLoading from "./SkeletonLoading";

const TodoItem = ({ loading, todo, del, open, isDelete, openDel }) => {
  const delById = (id) => {
    del(id);
  };
  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
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
              action={() => delById(todo._id)}
              // del={del}
              // action={() => del(todo.id)}
            />
          </div>
        </div>
      )}
    </>
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
