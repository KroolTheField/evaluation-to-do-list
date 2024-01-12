import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Liste des Tâches</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/add">Ajouter une tâche</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
