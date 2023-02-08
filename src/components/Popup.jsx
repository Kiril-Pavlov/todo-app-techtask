import React, { useState } from "react";

import styles from "../styles/popup.module.css";

const Popup = ({ popupState, setPopupState, task, taskList, setTaskList }) => {
    const [taskNameEdit, setTaskNameEdit] = useState('');
    const [taskDateEdit, setTaskDateEdit] = useState('');

  if (!popupState) return null;

  const handleTaskEdit = (task) => {
    let editedTasks = taskList.map((t) => {
      if (t.id === task.id) {
        return { ...t, taskName: taskNameEdit, taskDate: taskDateEdit };
      }
      return t;
    });
    setTaskList(editedTasks);
    localStorage.setItem("localTaskList", JSON.stringify(editedTasks));
    setPopupState();
    setTaskNameEdit("");
    setTaskDateEdit("");
  };

  const handleTaskNameEdit = (e) => {
    setTaskNameEdit(e.target.value);
  };

  const handleTaskDateEdit = (e) => {
    setTaskDateEdit(e.target.value);
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
          <label htmlFor="task-edit-input">Edit task name here:</label>
          <input
            type="text"
            onChange={handleTaskNameEdit}
            value={taskNameEdit}
            placeholder="Enter title task here"
          />
        </div>
        <div className={styles.popupInputContainer}>
          <label htmlFor="date-edit-input">Edit task date here:</label>
          <input
            type="date"
            onChange={handleTaskDateEdit}
            value={taskDateEdit}
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
