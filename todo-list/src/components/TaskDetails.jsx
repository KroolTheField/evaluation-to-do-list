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
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskDetails;
