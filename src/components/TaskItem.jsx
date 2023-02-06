import React from "react";

const TaskItem = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map((taskItem) => (
        <div key={taskItem.taskName}>
          <div>
            <div>{taskItem.status}</div>
            <div>{taskItem.taskName}</div>
          </div>
          <div>
            <div>{taskItem.date}</div>
            <div>{taskItem.status}</div>
          </div>
          <div>
            <button>EDIT</button>
            <button>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
