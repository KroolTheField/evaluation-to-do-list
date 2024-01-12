import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  return (
    <div className='task'>
      <Link to={`/task/${task.id}`}>
        <h3>{task.title}</h3>
      </Link>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskItem;