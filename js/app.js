// TaskManager - app.js
// Mantenimiento de Software 2026 - Actividad 4

let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
let currentFilter = 'todas';

const form = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');
const priorityInput = document.getElementById('task-priority');
const taskList = document.getElementById('task-list');
const emptyMsg = document.getElementById('empty-msg');
const taskCount = document.getElementById('task-count');
const filterBtns = document.querySelectorAll('.filter-btn');

function addTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function renderTasks() {
  const filtered = tasks.filter(t => {
    if (currentFilter === 'todas') return true;
    return t.estado === currentFilter;
  });

  taskList.innerHTML = '';
  emptyMsg.style.display = filtered.length === 0 ? 'block' : 'none';
  taskCount.textContent = `(${tasks.length})`;

  filtered.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item ${task.estado}`;
    li.dataset.id = task.id;
    li.innerHTML = `
      <input type="checkbox" class="task-check" ${task.estado === 'completada' ? 'checked' : ''} title="Marcar como completada"/>
      <div class="task-body">
        <div class="task-title">${escapeHtml(task.title)}</div>
        ${task.desc ? `<div class="task-desc">${escapeHtml(task.desc)}</div>` : ''}
        <div class="task-meta">
          <span class="badge badge-${task.priority}">${task.priority}</span>
          <span class="badge badge-estado ${task.estado}">${task.estado}</span>
        </div>
      </div>
      <button class="btn-delete" title="Eliminar tarea">✕</button>
    `;
    taskList.appendChild(li);
  });
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const newTask = {
    id: generateId(),
    title: titleInput.value.trim(),
    desc: descInput.value.trim(),
    priority: priorityInput.value,
    estado: 'pendiente',
    createdAt: new Date().toISOString()
  };
  tasks.unshift(newTask);
  addTasks();
  renderTasks();
  form.reset();
});

taskList.addEventListener('change', e => {
  if (e.target.classList.contains('task-check')) {
    const id = e.target.closest('.task-item').dataset.id;
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.estado = e.target.checked ? 'completada' : 'pendiente';
      addTasks();
      renderTasks();
    }
  }
});

taskList.addEventListener('click', e => {
  if (e.target.classList.contains('btn-delete')) {
    const id = e.target.closest('.task-item').dataset.id;
    tasks = tasks.filter(t => t.id !== id);
    addTasks();
    renderTasks();
  }
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Cargar tareas de ejemplo al inicio si no hay ninguna
if (tasks.length === 0) {
  tasks = [
    { id: generateId(), title: 'Revisar documentación del proyecto', desc: 'Leer el SWEBoK capítulo 5', priority: 'alta', estado: 'pendiente', createdAt: new Date().toISOString() },
    { id: generateId(), title: 'Configurar repositorio GitHub', desc: 'Crear repo y agregar colaboradores', priority: 'alta', estado: 'completada', createdAt: new Date().toISOString() },
    { id: generateId(), title: 'Escribir historias de usuario', desc: '', priority: 'media', estado: 'pendiente', createdAt: new Date().toISOString() },
  ];
  addTasks();
}

renderTasks();
