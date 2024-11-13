import React, { useEffect, useState } from 'react';

// Composant Thought pour représenter une pensée individuelle dans une ligne de tableau
// Prend en props l'objet "thought" et la fonction "removeThought" pour supprimer une pensée
function Thought({ thought, removeThought }) {
  // État local pour stocker le temps restant en secondes avant l'expiration de la pensée
  const [timeLeft, setTimeLeft] = useState(
    Math.max(0, Math.floor((thought.expirationTime - Date.now()) / 1000))
  );

  // useEffect pour créer un intervalle qui décrémente le temps restant chaque seconde
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        // Si le temps restant est inférieur ou égal à 1 seconde, supprimer la pensée et arrêter le minuteur
        if (prevTime <= 1) {
          removeThought(thought.id); // Appelle la fonction pour supprimer la pensée par son ID
          clearInterval(intervalId); // Nettoie l'intervalle pour éviter les appels inutiles
          return 0; // Retourne 0 pour indiquer qu'il n'y a plus de temps restant
        }
        // Décrémente le temps restant
        return prevTime - 1;
      });
    }, 1000); // Intervalle de 1 seconde

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [thought, removeThought]); // Dépendances pour s'assurer que l'intervalle est réinitialisé si la pensée change

  // Fonction pour formater le temps restant en minutes:secondes
  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60); // Convertit les secondes en minutes
    const seconds = timeLeft % 60; // Reste des secondes après les minutes
    // Retourne le format "minutes:secondes", en ajoutant un 0 pour les secondes si besoin
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    // Affiche la pensée dans une ligne de tableau
    <tr className="thought-row">
      {/* Colonne avec le texte de la pensée */}
      <td>{thought.text}</td>
      {/* Colonne avec le temps restant formaté */}
      <td>{formatTimeLeft()}</td>
      {/* Colonne avec un bouton pour supprimer manuellement la pensée */}
      <td>
        <button onClick={() => removeThought(thought.id)}>Supprimer</button>
      </td>
    </tr>
  );
}

export default Thought; // Exporte le composant pour être utilisé dans la liste de pensées
