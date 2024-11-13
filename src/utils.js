// Fonction pour générer un identifiant unique pour chaque pensée
// Utilise Math.random pour créer un nombre aléatoire, le convertit en base 36
// et extrait une portion pour obtenir un identifiant de chaîne unique
export const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
  // Fonction pour obtenir une nouvelle heure d'expiration pour une pensée
  // Définit l'heure d'expiration à 15 secondes après l'heure actuelle
  export const getNewExpirationTime = () => {
    const expirationTime = new Date(); // Crée une nouvelle instance de date avec l'heure actuelle
    expirationTime.setSeconds(expirationTime.getSeconds() + 15); // Ajoute 15 secondes à l'heure actuelle
    return expirationTime; // Retourne la date d'expiration
  };
  