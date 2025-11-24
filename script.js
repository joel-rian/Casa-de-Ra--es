function handleSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) {
    alert('Por favor, preencha nome e e-mail.');
    return false;
  }

  // Aqui você pode substituir por um fetch() para enviar para sua API
  const formMsg = document.getElementById('formMsg');
  const form = document.getElementById('leadForm');

  formMsg.style.display = 'block';
  form.reset();

  return false;
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('leadForm');
  form.addEventListener('submit', handleSubmit);
});
