import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormInput from "./component/FormInput";
import Button from "./component/Button";
import TodoItem from "./component/TodoItem";
import EditModal from "./component/EditModal";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Reading a book",
      },
      {
        id: 2,
        title: "Training",
      },
    ],
    isEdit: false,
  };

  openModal = () => {
    this.setState({
      isEdit: true,
    });
  };

  closeModal = () => {
    this.setState({
      isEdit: false,
    });
  };

  deleteteTask = (id) => {
    // console.log("delete ok");
    this.setState({
      todos: this.state.todos.filter((item) => item.id != id),
    });
  };

  addTask = (data) => {
    console.log("add data");
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data,
    };
    this.setState({
      todos: [...this.state.todos, newData],
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Task list</h3>
        </div>
        <div className="list">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              del={this.deleteteTask}
              open={this.openModal}
            />
          ))}
        </div>
        <div className="input-form">
          <FormInput add={this.addTask} />
        </div>
        <EditModal edit={this.state.isEdit} close={this.closeModal} />
      </div>
    );
  }
}

export default App;
