import React, { useEffect, useState } from "react";

import TaskItem from "./TaskItem";
import Popup from "./Popup";

import styles from "../styles/todo.module.css";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);

  //input states
  const [taskNameInput, setTaskNameInput] = useState("");
  const [taskDateInput, setTaskDateInput] = useState("");

  //popup states
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState('');

  // console.log(taskNameInput, taskDateInput)

  useEffect(() => {
    if (localStorage.getItem("localTaskList")) {
      let localData = JSON.parse(localStorage.getItem("localTaskList"));
      setTaskList(localData);
    }
  }, []);

  //add task to tasklist
  const addTask = (e) => {
    if (taskNameInput === "") {
      alert("Enter todo description");
    } else if (taskDateInput === "") {
      alert("Enter todo date");
    } else {
      let newTask = {
        id: new Date().getTime().toString(),
        taskName: taskNameInput,
        taskDate: taskDateInput,
        status: "active",
      };
      // console.log("tasklist before",taskList)
      setTaskList([...taskList, newTask]);
      localStorage.setItem(
        "localTaskList",
        JSON.stringify([...taskList, newTask])
      );
      setTaskNameInput("");
      setTaskDateInput("");
    }
  };
  // console.log("tasklist after",taskList)

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
          <input
            type="date"
            name=""
            id=""
            className={styles.inputDate}
            value={taskDateInput}
            onChange={(e) => setTaskDateInput(e.target.value)}
          />
          <button className={styles.addBtn} onClick={addTask}>
            ADD
          </button>
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
        <TaskItem
          tasks={taskList}
          setTasks={setTaskList}
          popupState={isOpen}
          setPopupState={setIsOpen}
          task={task}
          setTask={setTask}
        />
      </div>
      <Popup
        popupState={isOpen}
        setPopupState={() => setIsOpen(false)}
        task={task}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default TodoApp;
