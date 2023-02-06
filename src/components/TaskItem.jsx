import React from 'react'

const TaskItem = ({tasks,setTasks}) => {
  return (
    <div>
        {tasks.map(taskItem=>(
          <div key={taskItem.taskName}>
            {taskItem.taskName}
          </div>
          ))}
    </div>
  )
}

export default TaskItem