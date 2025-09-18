// Make sure these IDs match the HTML exactly:
const form  = document.getElementById('signup');
const input = document.getElementById('name');

form.addEventListener('submit', (e) => {
  e.preventDefault();                 // stop page reload
  const name = input.value.trim();
  if (!name) return;                  // do nothing if empty

  // Replace the form with the success message
  const card = form.parentElement;    // .card
  card.innerHTML = `
    <h1>Welcome, ${name}!</h1>
    <p>You've signed up 🎉</p>
  `;
});
