import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === parseInt(id))
  );

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <div className='details'>
      <p>{task.description}</p>
      <p>Priorité: {task.priority}</p>
      <p>État : {task.status}</p>
      </div>
    </div>
  );
};

export default TaskDetails;
