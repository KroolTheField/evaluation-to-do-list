import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../redux/tasksSlice';

const TaskDetails = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks.tasks); // Accédez à la propriété tasks
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === id)
  );


  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!task) {
    return <div>La tâche recherchée n'a pas été trouvée</div>;
  }

  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description || '',
    priority: task.priority,
    status: task.status,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    dispatch(
      updateTask({
        id: task.id,
        ...editedTask,
      })
    );
    navigate('/');
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    navigate('/');
  };

  return (
    <div>
      <h2>Modifier la tâche : {task.title}</h2>
      <form>
        <label>
          Titre:
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Priorité:
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleInputChange}
          >
            <option value="normale">Normale</option>
            <option value="importante">Importante</option>
            <option value="urgente">Urgente</option>
            <option value="très-urgente">Très Urgente</option>
          </select>
        </label>
        <label>
          État:
          <select
            name="status"
            value={editedTask.status}
            onChange={handleInputChange}
          >
            <option value="En cours">En cours</option>
            <option value="Terminée">Terminée</option>
            <option value="Abandonnée">Abandonnée</option>
          </select>
        </label>
        <button type="button" onClick={handleUpdate}>
          Enregistrer les modifications
        </button>
      </form>
      <div className='delete'>
        <button type="button" onClick={handleDelete}>
          Supprimer la tâche
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
