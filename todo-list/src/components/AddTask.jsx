import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      priority,
      status: 'En-cours',
      id: Date.now(), // This is a simple way to generate a unique ID
    };
    dispatch(addTask(newTask));
    // Reset form fields after submission
    setTitle('');
    setDescription('');
    setPriority('');
  };

  return (
    <div>
      <h2>Ajouter une nouvelle tâche</h2>
      <form onSubmit={handleSubmit}>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Priorité:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
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
