import React from 'react';
import Thought from './Thought'; // Importe le composant Thought pour chaque pensée individuelle

// Composant fonctionnel pour afficher la liste des pensées sous forme de tableau
// Prend les pensées actuelles et une fonction pour les supprimer comme props
function ThoughtList({ thoughts, removeThought }) {
  return (
    <table className="thought-list">
      {/* En-tête du tableau avec les titres des colonnes */}
      <thead>
        <tr>
          <th>Pensée</th>
          <th>Temps Restant</th>
          <th>Actions</th>
        </tr>
      </thead>
      
      {/* Corps du tableau qui affiche chaque pensée dans une ligne */}
      <tbody>
        {thoughts.map((thought) => (
          // Utilise le composant Thought pour chaque pensée
          // Passe l'ID de la pensée comme clé unique et transmet la pensée et la fonction de suppression
          <Thought
            key={thought.id}
            thought={thought}
            removeThought={removeThought}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ThoughtList; // Exporte le composant pour l'utiliser dans d'autres parties de l'application
