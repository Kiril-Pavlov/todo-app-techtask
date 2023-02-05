import React from 'react'

const TodoApp = () => {
  return (
    <div className='mainContainer'>
        <div>
          <input type="text" />
          <div>
            <input type="date" name="" id="" />
            <button>ADD</button>
          </div>
        </div>
        <div>
          <div>Filter by:</div>
          <div>
            <input type="date" name="" id="" />
            <select name="" id="">
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <div>Tackname</div>
            <button>Asc</button>
            <button>Desc</button>
          </div>
          <div>
            <div>Date</div>
            <button>Asc</button>
            <button>Desc</button>
          </div>
          <div>
            <div>Status</div>
            <button>Asc</button>
            <button>Desc</button>
          </div>
        </div>
        <div>
          {/* Mapping the task
          todo component */}
        </div>
    </div>
  )
}

export default TodoApp