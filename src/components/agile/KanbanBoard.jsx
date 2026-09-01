import React, { useState } from 'react';
// Importamos la librería de Drag and Drop
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import './KanbanBoard.css';

// 1. Estado inicial: Definimos las historias de usuario y las columnas
const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Facilitar Daily Scrum & Retrospectivas' },
    'task-2': { id: 'task-2', content: 'Gestionar y priorizar el Product Backlog' },
    'task-3': { id: 'task-3', content: 'Eliminar bloqueos e impedimentos del equipo' },
    'task-4': { id: 'task-4', content: 'Medir Velocity y Cycle Time' },
    'task-5': { id: 'task-5', content: 'Certificación Scrum Master (CSM) obtenida' },
  },
  columns: {
    'todo': {
      id: 'todo',
      title: 'Backlog (Skills)',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'in-progress': {
      id: 'in-progress',
      title: 'En Práctica (Doing)',
      taskIds: [],
    },
    'done': {
      id: 'done',
      title: 'Completado (Done)',
      taskIds: ['task-5'],
    },
  },
  columnOrder: ['todo', 'in-progress', 'done'],
};

export default function KanbanBoard() {
  // 2. Manejamos todo el estado del tablero con useState
  const [data, setData] = useState(initialData);

  // 3. Lógica para reordenar las tarjetas cuando termina el arrastre
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // Si soltamos la tarjeta fuera de un área válida, no hacemos nada
    if (!destination) return;

    // Si la soltamos exactamente donde estaba, tampoco hacemos nada
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const startColumn = data.columns[source.droppableId];
    const finishColumn = data.columns[destination.droppableId];

    // CASO A: Mover la tarjeta dentro de la misma columna
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1); // Quitamos de la posición original
      newTaskIds.splice(destination.index, 0, draggableId); // Insertamos en la nueva posición

      const newColumn = { ...startColumn, taskIds: newTaskIds };
      setData({
        ...data,
        columns: { ...data.columns, [newColumn.id]: newColumn },
      });
      return;
    }

    // CASO B: Mover la tarjeta de una columna a otra diferente
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = { ...startColumn, taskIds: startTaskIds };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = { ...finishColumn, taskIds: finishTaskIds };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  return (
    <div className="kanban-wrapper">
      {/* Contexto principal que envuelve todo el sistema Drag & Drop */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-container">
          
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
              <div className="kanban-column" key={column.id}>
                <h3>{column.title}</h3>
                
                {/* Zona donde se pueden soltar tarjetas */}
                <Droppable droppableId={column.id}>
                  {(provided, snapshot) => (
                    <div
                      className={`task-list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {tasks.map((task, index) => (
                        // La tarjeta en sí, que puede ser arrastrada
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              className={`task-card ${snapshot.isDragging ? 'is-dragging' : ''}`}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {task.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {/* Placeholder invisible necesario para la librería */}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

