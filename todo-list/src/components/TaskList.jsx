// TaskList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { validateTask, setPriorityFilter, setStatusFilter } from '../redux/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const priorityFilter = useSelector((state) => state.tasks.priorityFilter);
  const statusFilter = useSelector((state) => state.tasks.statusFilter);
  const dispatch = useDispatch();

  const handleValidate = (taskId) => {
    dispatch(validateTask(taskId));
  };

  const handlePriorityFilter = (priority) => {
    dispatch(setPriorityFilter(priority));
  };

  const handleStatusFilter = (status) => {
    dispatch(setStatusFilter(status));
  };

  const filteredTasks = tasks.filter((task) => {
    const priorityMatch = priorityFilter === 'all' || task.priority === priorityFilter;
    const statusMatch = statusFilter === 'all' || task.status === statusFilter;
    return priorityMatch && statusMatch;
  });

  return (
    <div>
      <h2>Liste des Tâches à Effectuer</h2>
      <div className='filterWrapper'>
        <div className='filter'>
          <label>Filtrer par Priorité:</label>
          <select value={priorityFilter} onChange={(e) => handlePriorityFilter(e.target.value)}>
            <option value="all">Toutes</option>
            <option value="normale">Normale</option>
            <option value="importante">Importante</option>
            <option value="urgente">Urgente</option>
            <option value="très-urgente">Très Urgente</option>
          </select>
        </div>
        <div className='filter'>
          <label>Filtrer par État:</label>
          <select value={statusFilter} onChange={(e) => handleStatusFilter(e.target.value)}>
            <option value="all">Toutes</option>
            <option value="En cours">En cours</option>
            <option value="Terminée">Terminée</option>
          </select>
        </div>
      </div>
      {filteredTasks.map((task) => (
        <div key={task.id} className={`task ${task.status === 'Terminée' ? 'valide' : ''} ${task.status === 'Abandonnée' ? 'abandon' : ''}`}>
          <TaskItem task={task} />
          {(task.status !== 'Terminée' && task.status !== 'Abandonnée') && (
            <button type="button" onClick={() => handleValidate(task.id)}>
              Valider
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
