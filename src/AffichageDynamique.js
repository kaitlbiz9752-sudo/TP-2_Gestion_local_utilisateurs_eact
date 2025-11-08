import { useState } from 'react';

const messages = ['Premier clic', 'Deuxième clic', 'Troisième clic'];

function AffichageDynamique() {
  const [index, setIndex] = useState(-1);

  function handleClick() {
    setIndex((prev) => (prev + 1) % messages.length);
  }

  return (
    <div>
      <p>{index === -1 ? 'Cliquez pour commencer' : messages[index]}</p>
      <button onClick={handleClick}>Changer le texte</button>
    </div>
  );
}

export default AffichageDynamique;
