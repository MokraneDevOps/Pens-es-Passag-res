import React, { useState } from 'react';
import AddThoughtForm from './AddThoughtForm';
import ThoughtList from './ThoughtList';
import './App.css'; // Importation du fichier CSS pour les styles

// Composant principal de l'application
function App() {
  // État pour stocker la liste des pensées
  const [thoughts, setThoughts] = useState([]);

  // Fonction pour ajouter une nouvelle pensée à la liste
  const addThought = (thought) => {
    // Ajoute la nouvelle pensée au début de la liste des pensées
    setThoughts((prev) => [thought, ...prev]);
  };

  // Fonction pour supprimer une pensée de la liste en fonction de son ID
  const removeThought = (id) => {
    // Filtre la liste des pensées pour supprimer celle correspondant à l'ID spécifié
    setThoughts((prev) => prev.filter((thought) => thought.id !== id));
  };

  return (
    <div className="App"> {/* Div principale contenant l'application */}
      <h1>Pensées Passagères</h1> {/* Titre principal de l'application */}
      {/* Formulaire pour ajouter une nouvelle pensée, avec la fonction addThought passée en prop */}
      <AddThoughtForm addThought={addThought} />
      {/* Liste des pensées, avec les pensées actuelles et la fonction removeThought passée en prop */}
      <ThoughtList thoughts={thoughts} removeThought={removeThought} />
    </div>
  );
}

export default App; // Exporte le composant principal pour utilisation dans d'autres parties de l'application
