import React, { useState } from "react";

import TaskItem from "./TaskItem";

import styles from "../styles/todo.module.css";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const TodoApp = () => {
  const [taskList, setTaskList] = useState([
    {
      taskName: "Learn JavaScript",
      date: "06/02/2023",
      status: "completed",
    },
    {
      taskName: "Learn Tailwind",
      date: "12/02/2023",
      status: "active",
    },
    {
      taskName: "Learn NodeJS",
      date: "06/02/2023",
      status: "completed",
    },
    {
      taskName: "Learn Express",
      date: "08/02/2023",
      status: "active",
    },
    {
      taskName: "Learn SQL",
      date: "06/02/2023",
      status: "completed",
    },
  ]);
  const [taskNameInput, setTaskNameInput] = useState("");
  const [taskDateInput, setTaskDateInput] = useState("");

  // console.log(taskNameInput, taskDateInput)

  //add task to tasklist
  const addTask = (e) => {
    if(taskNameInput === ""){
      alert("Enter todo description")
    }else if(taskDateInput === ""){
      alert("Enter todo date")
    }else{
      alert("all ok")
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputAreaContainer}>
        <input
          type="text"
          className={styles.taskNameInput}
          placeholder="Enter task description here..."
          value={taskNameInput}
          onChange={(e) => setTaskNameInput(e.target.value)}
        />
        <div className={styles.inputDateBtnContainer}>
          <input type="date" name="" id="" className={styles.inputDate} 
          value={taskDateInput}
          onChange={(e)=>setTaskDateInput(e.target.value)}
          />
          <button className={styles.addBtn} onClick={addTask}>ADD</button>
        </div>
      </div>
      <div className={styles.filterAreaContainer}>
        <div className={styles.filterLabel}>Filter by:</div>
        <div className={styles.dateStatusContainer}>
          <input type="date" name="" id="" className={styles.filterDate} />
          <select name="" id="" className={styles.filterDate}>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className={styles.sortAreaContainer}>
        <div className={styles.sortItemContainer}>
          <div className={styles.sortLabel}>Name</div>
          <div className={styles.sortDirection}>
            <button className={styles.sortBtn}>
              <AiOutlineArrowDown />
            </button>
            <button className={styles.sortBtn}>
              <AiOutlineArrowUp />
            </button>
          </div>
        </div>
        <div className={styles.sortItemContainer}>
          <div className={styles.sortLabel}>Date</div>
          <div className={styles.sortDirection}>
            <button className={styles.sortBtn}>
              <AiOutlineArrowDown />
            </button>
            <button className={styles.sortBtn}>
              <AiOutlineArrowUp />
            </button>
          </div>
        </div>
        <div className={styles.sortItemContainer}>
          <div className={styles.sortLabel}>Status</div>
          <div className={styles.sortDirection}>
            <button className={styles.sortBtn}>
              <AiOutlineArrowDown />
            </button>
            <button className={styles.sortBtn}>
              <AiOutlineArrowUp />
            </button>
          </div>
        </div>
      </div>
      <div>
        <TaskItem tasks={taskList} setTasks={setTaskList} />
      </div>
    </div>
  );
};

export default TodoApp;
