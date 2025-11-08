import { useState } from 'react';

function FormulaireInscription() {
  const [form, setForm] = useState({ prenom: '', email: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Prénom : ${form.prenom}\nEmail : ${form.email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Prénom :
          <input
            type="text"
            name="prenom"
            value={form.prenom}
            onChange={handleChange}
            placeholder="Votre prénom"
          />
        </label>
      </div>
      <div>
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="exemple@domaine.com"
          />
        </label>
      </div>
      <button type="submit">S’inscrire</button>
    </form>
  );
}

export default FormulaireInscription;
