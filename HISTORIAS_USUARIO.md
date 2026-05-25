# Historias de Usuario – TaskManager

Proyecto: TaskManager  
Módulo: Mantenimiento de Software – Actividad 4  
Institución: Corporación Universitaria Iberoamericana  

---

## HU-001: Agregar una nueva tarea

**Como** usuario de la aplicación,  
**Quiero** poder agregar una nueva tarea con título, descripción y prioridad,  
**Para** registrar mis pendientes de forma organizada.

**Criterios de aceptación:**
- El formulario debe tener campos para título (obligatorio), descripción (opcional) y prioridad.
- Al enviar el formulario, la tarea debe aparecer en la lista inmediatamente.
- Si el título está vacío, el formulario no debe enviarse.

---

## HU-002: Marcar tarea como completada

**Como** usuario de la aplicación,  
**Quiero** poder marcar una tarea como completada usando una casilla de verificación,  
**Para** llevar control del progreso de mis actividades.

**Criterios de aceptación:**
- Al marcar la casilla, el estado de la tarea cambia a "completada".
- La tarea completada debe mostrarse visualmente diferente (tachado y opacidad reducida).
- El cambio debe persistir aunque se recargue la página.

---

## HU-003: Filtrar tareas por estado

**Como** usuario de la aplicación,  
**Quiero** poder filtrar las tareas por estado (todas, pendientes, completadas),  
**Para** visualizar únicamente las tareas que me interesan en cada momento.

**Criterios de aceptación:**
- Deben existir tres botones de filtro: "Todas", "Pendientes" y "Completadas".
- Al hacer clic en un filtro, la lista debe actualizarse mostrando solo las tareas correspondientes.
- El filtro activo debe estar visualmente resaltado.

---

## HU-004: Eliminar una tarea

**Como** usuario de la aplicación,  
**Quiero** poder eliminar una tarea de la lista,  
**Para** mantener mi lista de tareas limpia y actualizada.

**Criterios de aceptación:**
- Cada tarea debe tener un botón de eliminación visible.
- Al hacer clic en el botón, la tarea debe desaparecer de la lista de forma inmediata.
- La eliminación debe ser permanente (persistida en localStorage).

---

## HU-005: Visualizar el conteo de tareas

**Como** usuario de la aplicación,  
**Quiero** ver el número total de tareas registradas,  
**Para** tener una visión rápida del volumen de mis pendientes.

**Criterios de aceptación:**
- El contador debe mostrarse junto al título de la sección de tareas.
- El contador debe actualizarse automáticamente al agregar o eliminar tareas.
- El contador debe reflejar el total de tareas, independientemente del filtro activo.
