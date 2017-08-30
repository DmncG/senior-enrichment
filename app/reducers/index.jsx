import { combineReducers } from 'redux';
import axios from 'axios';

//INITIAL STATE

const initialState = {
    student: {},
    campus: {},
    campusList: [],
    studentsList: [],
    newStudentEntry: '',
    newEmailEntry: '',
    newCampus: '',
}

//ACTION TYPES

//CAMPUS
const GET_CAMPUS = 'GET_CAMPUS';
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';
const WRITE_CAMPUS ='WRITE_CAMPUS';

//STUDENTS
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const WRITE_STUDENT = 'WRITE_STUDENT';


//ACTION CREATORS

//CAMPUS
export function getCampus (campusList) {
  const action = {type: GET_CAMPUS, campusList}
  return action;
}

export function getSingleCampus (campus) {
  const action = {type: GET_SINGLE_CAMPUS, campus}
  return action;
}

export function writeCampus (campus) {
  const action = {type: WRITE_CAMPUS, campus}
}

//STUDENT
export function getStudents (studentsList) {
  const action = {type: GET_STUDENTS, studentsList}
  return action;
}

export function getStudent (student) {
  const action = {type: GET_STUDENT, student}
  return action;
}

export function updateStudent (student) {
  const action = {type: UPDATE_STUDENT, student}
  return action;
}

export function writeStudent (newStudentEntry, newEmailEntry) {
  const action = {type: WRITE_STUDENT, newStudentEntry}
  return action;
}



//THUNK CREATORS

export function fetchCampus () {
    
    return function thunk (dispatch) {
        return axios.get('/api/campus/')
        .then(res => res.data)
        .then(campus => {
            const action = getCampus (campus);
            dispatch(action);
        })
        .catch()
    }
}

export function fetchStudents () {
    
    return function thunk (dispatch) {
        return axios.get('/api/students/')
        .then(res => res.data)
        .then(students => {
            const action = getStudents (students);
            dispatch(action);
        })
        .catch()
    }
}

export function postStudent (student, history) {

  return function thunk (dispatch) {
    return axios.post('/api/students/', student)
    .then(res => res.data)
    .then(newStudent=> {
      dispatch(getStudent(newStudent))
    })
  }
}

  
//REDUCERS

const rootReducer = function(state = initialState, action) {
  switch(action.type) {

    //CAMPUS 

    case GET_CAMPUS:
      return Object.assign({}, state, {campusList: action.campusList}); 

    case GET_SINGLE_CAMPUS:
    return Object.assign({}, state, {campusList: [...state.campusList, action.campus]});

    case WRITE_CAMPUS:
    return action.campus;

    //STUDENTS

    case GET_STUDENTS:
      return Object.assign({}, state, {studentsList: action.studentsList});

    case GET_STUDENT:
      return Object.assign({}, state, {studentsList: [...state.studentsList, action.student]});
    
    case UPDATE_STUDENT:
      return Object.assign({}, state, {name: action.name});

    case WRITE_STUDENT:
      return Object.assign({}, state, {newStudentEntry: action.newStudentEntry})

    default:
      return state;
  };

};

export default rootReducer
