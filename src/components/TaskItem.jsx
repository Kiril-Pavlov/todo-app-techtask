import React from "react";

import styles from "../styles/task.module.css";

import {
  MdDoneOutline,
  MdOutlineModeEditOutline,
  MdDelete,
} from "react-icons/md";

const TaskItem = ({ tasks, setTasks, task, setTask, setPopupState }) => {
  //delete task by id
  const deleteTask = (taskItem) => {
    const updated = tasks.filter((t) => t.id !== taskItem.id);
    setTasks(updated);
    localStorage.setItem("localTaskList", JSON.stringify(updated));
  };

  //toggle task status (active or completed)
  const toggleTaskStatus = (taskItem) => {
    let modified = tasks.map((t) => {
      if (taskItem.id === t.id) {
        return { ...t, status: t.status === "active" ? "completed" : "active" };
      }
      return t;
    });
    setTasks(modified);
    localStorage.setItem("localTaskList", JSON.stringify(modified));
  };

  //handle  the popup and set the task to be edited
  const handlePopupOpened = (taskItem) => {
    setPopupState(true);
    setTask(taskItem);
  };

  return (
    <div className={styles.tasksContainer}>
      {tasks.map((taskItem) => (
        <div
          className={`${styles.taskContainer} ${
            taskItem.status === "completed" ? styles.dark : null
          }`}
          key={taskItem.id}
        >
          <div
            className={`${styles.taskName} ${
              taskItem.status === "completed" ? styles.inactive : null
            }`}
          >
            <div>{taskItem.taskName}</div>
          </div>
          <div className={styles.taskDateStatus}>
            <div
              className={`${styles.taskDate} ${
                taskItem.status === "completed" ? styles.inactive : null
              }`}
            >
              {taskItem.taskDate}
            </div>
            <div
              className={`${styles.taskStatus} ${
                taskItem.status === "completed" ? styles.completed : null
              }`}
            >
              {taskItem.status}
            </div>
          </div>
          <div className={styles.controlsContainer}>
            <button onClick={() => toggleTaskStatus(taskItem)}>
              <MdDoneOutline />
            </button>
            <button onClick={() => handlePopupOpened(taskItem)}>
              <MdOutlineModeEditOutline />
            </button>
            <button onClick={() => deleteTask(taskItem)}>
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
