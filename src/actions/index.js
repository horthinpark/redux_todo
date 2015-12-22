import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, FETCH_TODO } from './actionTypes.js'
import fetch from 'isomorphic-fetch';


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

export function fetchTodo() {
  return dispatch => {
    return fetch('http://qiita.com/api/v2/tags/ruby', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(response => {
      return response.json();
    }).then(json => {
      dispatch(addTodo(json.id));
    });
  };
}
