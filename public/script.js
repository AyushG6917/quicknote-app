function addNote() {
  const note = document.getElementById('noteInput').value;

  fetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ note })
  })
  .then(() => {
    document.getElementById('noteInput').value = '';
    loadNotes();
  });
}

function loadNotes() {
  fetch('/api/notes')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('noteList');
      list.innerHTML = '';
      data.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        list.appendChild(li);
      });
    });
}

window.onload = loadNotes;
