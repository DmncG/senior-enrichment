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
    newCampusId: 1,
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
const WRITE_EMAIL = 'WRITE_EMAIL';
const WRITE_CAMPUS_ID = 'WRITE_CAMPUS_ID';


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

export function writeCampus (newCampus) {
  const action = {type: WRITE_CAMPUS, newCampus}
  return action;
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

export function writeStudent (newStudentEntry) {
  const action = {type: WRITE_STUDENT, newStudentEntry}
  return action;
}

export function writeEmail ( newEmailEntry) {
  const action = {type: WRITE_EMAIL, newEmailEntry}
  return action;
}

export function writeCampusId (newCampusId) {
  const action = {type: WRITE_CAMPUS_ID, newCampusId}
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
    .then(res => {
      return res.data
    })
    .then(newStudent => {
      dispatch(getStudent(newStudent));
      history.push(`students/${newStudent.id}`)
    })
  }
}

export function postCampus (campus, history) {
  
    return function thunk (dispatch) {
      return axios.post('/api/campus/', campus)
      .then(res => {
        return res.data
      })
      .then(newCampus => {
        dispatch(getSingleCampus(newCampus));
        history.push('campus/');
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
    return Object.assign({}, state, {newCampus: action.newCampus})

    //STUDENTS

    case GET_STUDENTS:
      return Object.assign({}, state, {studentsList: action.studentsList});

    case GET_STUDENT:
      return Object.assign({}, state, {studentsList: [...state.studentsList, action.student]});
    
    case UPDATE_STUDENT:
      return Object.assign({}, state, {name: action.name});

    case WRITE_STUDENT:
      return Object.assign({}, state, {newStudentEntry: action.newStudentEntry});

    case WRITE_EMAIL:
      return Object.assign({}, state, {newEmailEntry: action.newEmailEntry});

    case WRITE_CAMPUS_ID:
      return Object.assign({}, state, {newCampusId: action.newCampusId} );

    default:
      return state;
  };

};

export default rootReducer
