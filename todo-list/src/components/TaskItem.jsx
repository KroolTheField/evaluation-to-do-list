import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  return (
    <div className='task'>
      <Link to={`/task/${task.id}`}>
        <h3>{task.title}</h3>
      </Link>
      <p className='shortdescription'>{task.description}</p>
      <p>Priorité : {task.priority}</p>
      <p>État : {task.status}</p>
    </div>
  );
};

export default TaskItem;
