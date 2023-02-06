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
            controls
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
