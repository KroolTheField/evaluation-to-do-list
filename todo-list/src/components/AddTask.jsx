import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'normale', // Assurez-vous que la valeur par défaut est 'normale'
    status: 'En cours', // Assurez-vous que la valeur par défaut est 'En cours'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Générez l'ID en tant que chaîne de caractères
    const taskId = Date.now().toString();
    
    // Dispatch l'action addTask avec les données du formulaire et l'ID généré
    dispatch(addTask({ ...task, id: taskId }));
    
    // Réinitialiser le formulaire après l'ajout de la tâche
    setTask({
      title: '',
      description: '',
      priority: 'normale',
      status: 'En cours',
    });
  };

  return (
    <div>
      <h2>Ajouter une nouvelle tâche</h2>
      <form onSubmit={handleSubmit}>
        <label>Titre :</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
        <label>Description:</label>
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <label>Priorité:</label>
        <select
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          required
        >
          <option value="normale">Normale</option>
          <option value="importante">Importante</option>
          <option value="urgente">Urgente</option>
          <option value="très-urgente">Très Urgente</option>
        </select>
        <button type="submit">Ajouter la tâche</button>
      </form>
    </div>
  );
};

export default AddTask;
