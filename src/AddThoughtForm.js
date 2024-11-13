import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utils';

// Composant AddThoughtForm pour ajouter de nouvelles pensées
// Reçoit en prop la fonction "addThought" qui permet d'ajouter une pensée à la liste
function AddThoughtForm({ addThought }) {
  // État local pour stocker le texte de la pensée actuelle
  const [text, setText] = useState('');

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    // Crée un objet pensée avec un ID unique, le texte, et une heure d'expiration
    const thought = {
      id: generateId(), // Génère un ID unique pour la pensée
      text, // Utilise le texte actuel de l'état
      expirationTime: getNewExpirationTime(), // Détermine l'heure d'expiration
    };
    addThought(thought); // Ajoute la pensée en utilisant la fonction addThought
    setText(''); // Réinitialise le champ de saisie après l'ajout
  };

  return (
    // Formulaire pour saisir une nouvelle pensée
    <form onSubmit={handleSubmit} className="add-thought-form">
      {/* Champ de saisie pour écrire la pensée */}
      <input
        type="text"
        value={text} // Définit la valeur du champ avec l'état text
        onChange={(e) => setText(e.target.value)} // Met à jour l'état text avec la valeur saisie
        placeholder="Écrivez votre pensée..." // Placeholder pour guider l'utilisateur
        required // Champ requis pour éviter les pensées vides
      />
      {/* Bouton pour soumettre la pensée */}
      <button type="submit">Ajouter Pensée</button>
    </form>
  );
}

export default AddThoughtForm; // Exporte le composant pour utilisation dans d'autres parties de l'application
