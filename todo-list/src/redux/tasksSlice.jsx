// tasksSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    priorityFilter: 'all',
    statusFilter: 'all',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    validateTask: (state, action) => {
      const taskToValidate = state.tasks.find((task) => task.id === action.payload);
      if (taskToValidate) {
        taskToValidate.status = 'Terminée';
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, title, description, priority, status } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);

      if (taskToUpdate) {
        taskToUpdate.title = title;
        taskToUpdate.description = description;
        taskToUpdate.priority = priority;
        taskToUpdate.status = status;
      }
    },
    setPriorityFilter: (state, action) => {
      state.priorityFilter = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateTask,
  validateTask,
  setPriorityFilter,
  setStatusFilter,
} = tasksSlice.actions;
export default tasksSlice.reducer;
