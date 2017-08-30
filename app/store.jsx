import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';

//INITIAL STATE

// const initialState = {
//     name: 'John Doe',
//     email: 'johndoe@margaret.com',
//     campus: 'floating in space',
//     campusList: [],
//     studentsList: [],
// }

// //ACTION TYPES

// const GET_CAMPUS = 'GET_CAMPUS';
// const GET_STUDENTS = 'GET_STUDENTS';
// const ADD_STUDENT = 'ADD_STUDENT';
// const ADD_CAMPUS = 'ADD_CAMPUS';
// const UPDATE_STUDENT = 'UPDATE_STUDENT';

// //ACTION CREATORS

// export function getCampus (campusList) {
//   const action = {type: GET_CAMPUS, campusList}
//   return action;
// }

// export function getStudents (students) {
//   const action = {type: GET_STUDENTS, students}
//   return action;
// }

// export function addStudent (student) {
//   const action = {type: ADD_STUDENT, student}
//   return action;
// }

// export function addCampus (campus) {
//   const action = {type: ADD_CAMPUS, campus}
//   return action;
// }

// export function updateStudent (student) {
//   const action = {type: UPDATE_STUDENT, student}
//   return action;
// }

//THUNK CREATORS




const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));
export default store;
