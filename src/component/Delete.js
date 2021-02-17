import React from "react";
import Button from "./Button";
import "../styles/Delete.css";

class Delete extends React.Component {
  render() {
    const { deleteTask, openDel, todo, closeDell, del } = this.props;
    const delById = (id) => {
      deleteTask(id);
    };

    if (openDel) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Apakah anda yakin!</h3>
            <div className="btn-group">
              <Button
                text="Ok"
                variant="warning"
                actioon={() => deleteTask(todo.id)}
                del={() => del(todo.id)}
              />
              <Button text="cencel" variant="primary" action={closeDell} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Delete;
