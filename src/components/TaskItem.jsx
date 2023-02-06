import React from "react";

import styles from '../styles/task.module.css'

import {MdDoneOutline, MdOutlineModeEditOutline, MdDelete} from 'react-icons/md'


const TaskItem = ({ tasks, setTasks }) => {
  return (
    <div className={styles.tasksContainer}>
      {tasks.map((taskItem) => (
        <div className={`${styles.taskContainer} ${taskItem.status==="completed" ? styles.dark:null}`} key={taskItem.taskName}>
          <div className={`${styles.taskName} ${taskItem.status==="completed" ? styles.inactive:null}`}>
            <div>{taskItem.taskName}</div>
          </div>
          <div className={styles.taskDateStatus}>
            <div className={`${styles.taskName} ${taskItem.status==="completed" ? styles.inactive:null}`}>{taskItem.date}</div>
            <div className={`${styles.taskStatus} ${taskItem.status==="completed" ? styles.completed:null}`}>{taskItem.status}</div>
          </div>
          <div className={styles.controlsContainer}>
            <button><MdDoneOutline/></button>
            <button><MdOutlineModeEditOutline/></button>
            <button><MdDelete/></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
