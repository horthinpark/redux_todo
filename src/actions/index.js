import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from './actionTypes.js'

export  const VisibilityFilters ={
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0;

export function addTodo(text) {
  return { 
    type: ADD_TODO,
    id: nextTodoId++,
    text }
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id}
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
