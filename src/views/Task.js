import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import FormInput from "../component/FormInput";
import Button from "../component/Button";
import TodoItem from "../component/TodoItem";
import EditModal from "../component/EditModal";
import Delete from "../component/Delete";
import axios from "axios";

const baseUrl = `https://my-udemy-api.herokuapp.com/api/v1`;

const Task = () => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsedit] = useState(false);
  const [editData, setEditdata] = useState({
    id: "",
    title: "",
  });

  // closeDel = () => {
  //   this.setState({
  //     isDelete: false,
  //   });
  // };

  const update = () => {
    const { id, title } = editData;
    const newData = { id, title };
    const newTodos = this.state.todos;
    newTodos.splice(id - 1, 1, newData);
    setTodos(newTodos);
    setIsedit(false);
    setEditdata({ id: "", title: "" });
  };

  const setTitle = (e) => {
    setEditdata({
      ...editData,
      title: e.target.value,
    });
  };

  const openModal = (id, data) => {
    setIsedit(true);
    setEditdata({ id, title: data });
  };

  const closeModal = () => {
    setIsedit(false);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const addTask = (data) => {
    const id = todos.length;
    const newData = {
      id: id + 1,
      title: data,
    };
    setTodos([...todos, newData]);
  };

  const getData = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${baseUrl}/todo`, {
      headers: {
        Authorization: token,
      },
    });
    console.log(res);
    setTodos(res.data.todos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Task list</h3>
      </div>
      <div className="list">
        {todos.map((item) => (
          <TodoItem
            key={item._id}
            todo={item}
            del={deleteTask}
            open={openModal}
            // openDel={openDel}
          />
        ))}
      </div>
      <div className="input-form">
        <FormInput add={addTask} />
      </div>
      <EditModal
        edit={isEdit}
        close={closeModal}
        change={setTitle}
        data={editData}
        update={update}
      />

      {/* <Delete
        openDel={this.state.isDelete}
        del={this.deleteTask}
        todo={this.state.todos}
        closeDell={this.closeDel}
      /> */}
    </div>
  );
};

export default Task;
