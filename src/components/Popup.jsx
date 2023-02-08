import React, { useState } from "react";

import styles from "../styles/popup.module.css";

const Popup = ({ popupState, setPopupState, task, taskList, setTaskList }) => {
  const [taskTitleEdit, setTaskTitleEdit] = useState("");

  if (!popupState) return null;

  const handleTaskEdit = (task) => {
    console.log(task);
    let editedTasks = taskList.map((t) => {
      console.log(t.id, task.id);
      if (t.id === task.id) {
        return { ...t, taskName: taskTitleEdit };
      }
      return t;
    });
    console.log(editedTasks);
    setTaskList(editedTasks);
    localStorage.setItem("localTaskList", JSON.stringify(editedTasks));
    setPopupState();
    setTaskTitleEdit("");
  };

  const handleTitleEdit = (e) => {
    setTaskTitleEdit(e.target.value);
  };


  return (
    <div className={styles.overlayContainer} onClick={setPopupState}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.popupContainer}
      >
        <button onClick={setPopupState} className={styles.popupCloseButton}>
          X
        </button>
        <div className={styles.popupInputContainer}>
          <label htmlFor="task-edit-input">Edit task here:</label>
          <input
            type="text"
            onChange={handleTitleEdit}
            value={taskTitleEdit}
            placeholder="Enter title task here"
          />
        </div>
        <div className={styles.popupButtons}>
          <button
            onClick={() => handleTaskEdit(task)}
            className={styles.popupConfirmButton}
          >
            CONFIRM
          </button>
          <button onClick={setPopupState} className={styles.popupCancelButton}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
