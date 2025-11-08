import { useEffect, useState } from 'react';

function CompteurTitre() {
  const [clics, setClics] = useState(0);

  useEffect(() => {
    const ancienTitre = document.title;
    document.title = `Clics : ${clics}`;
    return () => {
      document.title = ancienTitre; // Nettoyage si le composant se démonte
    };
  }, [clics]);

  return (
    <div>
      <p>Nombre de clics : {clics}</p>
      <button onClick={() => setClics((n) => n + 1)}>Incrémenter</button>
    </div>
  );
}

export default CompteurTitre;
