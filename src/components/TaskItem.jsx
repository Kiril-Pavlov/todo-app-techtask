import React from "react";

import styles from "../styles/task.module.css";

import {
  MdDoneOutline,
  MdOutlineModeEditOutline,
  MdDelete,
  MdUndo
} from "react-icons/md";

const TaskItem = ({
  tasks,
  setTasks,
  setPopupState,
  setTask,
  dateFilter,
  statusFilter,
  sortBy,
}) => {
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

  //handle filtering undefined or empty filters included
  const handleFiltering = (t) => {
    if (!dateFilter && (statusFilter === "all" || !statusFilter)) {
      return tasks;
    } else if (!dateFilter) {
      return tasks.filter((t) => t.status === statusFilter);
    } else if (statusFilter === "all" || !statusFilter) {
      return tasks.filter((t) => t.taskDate === dateFilter);
    } else {
      return tasks
        .filter((t) => t.status === statusFilter)
        .filter((t) => t.taskDate === dateFilter);
    }
  };

  return (
    <div className={styles.tasksContainer}>
      {handleFiltering()
        .sort(
          sortBy === "nameAsc"
            ? (a, b) => {
                if (a.taskName.toLowerCase() < b.taskName.toLowerCase()) {
                  return -1;
                }
                if (a.taskName.toLowerCase() > b.taskName.toLowerCase()) {
                  return 1;
                }
              }
            : sortBy == "nameDesc"
            ? (a, b) => {
                if (a.taskName.toLowerCase() < b.taskName.toLowerCase()) {
                  return 1;
                }
                if (a.taskName.toLowerCase() > b.taskName.toLowerCase()) {
                  return -1;
                }
              }
            : sortBy === "dateAsc"
            ? (a, b) => new Date(a.taskDate) - new Date(b.taskDate)
            : sortBy==="dateDesc" 
            ? (a, b) => new Date(b.taskDate) - new Date(a.taskDate)
            : sortBy === "statusAsc"
            ? (a, b) => {
              if (a.status.toLowerCase() < b.status.toLowerCase()) {
                return -1;
              }
              if (a.status.toLowerCase() > b.status.toLowerCase()) {
                return 1;
              }
            }
            : sortBy==="statusDesc" 
            ? (a, b) => {
              if (a.status.toLowerCase() < b.status.toLowerCase()) {
                return 1;
              }
              if (a.status.toLowerCase() > b.status.toLowerCase()) {
                return -1;
              }
            }
            :(a, b) => new Date(a.taskDate) - new Date(b.taskDate)
        )
        .map((taskItem) => (
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
                {taskItem.status === "active" ? (
                  <MdDoneOutline />
                ):(
                  <MdUndo />
                )}
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
