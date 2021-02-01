import logo from "./logo.svg";
import "./App.css";
import FormInput from "./component/FormInput";
import Button from "./component/Button";
import TodoItem from "./component/TodoItem";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Task list</h3>
      </div>
      <div className="list">
        <TodoItem />
      </div>
      <div className="input-form">
        <FormInput />
      </div>
    </div>
  );
}

export default App;
