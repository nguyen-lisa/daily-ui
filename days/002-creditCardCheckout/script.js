const formEl = document.getElementById("checkout");
const nameEl = document.getElementById("name");
const numEl = document.getElementById("num");
const expEl = document.getElementById("exp");
const cvcEl = document.getElementById("cvc");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameEl.value.trim();
  const card = numEl.value.trim();
  const exp = expEl.value.trim();
  const cvc = cvcEl.value.trim();

  if (!name || !card || !exp || !cvc) return;

  const msg = document.createElement("div");
  const title = document.createElement("h3");
  const p = document.createElement("p");

  title.textContent = `You have successfully checked out, ${name}!`;
  p.textContent = "Shop with us again soon ☺";

  msg.append(title, p);
  formEl.replaceWith(msg);
});
