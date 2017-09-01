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
const DELETE_CAMPUS ='DELETE_CAMPUS';

//STUDENTS
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const WRITE_STUDENT = 'WRITE_STUDENT';
const WRITE_EMAIL = 'WRITE_EMAIL';
const WRITE_CAMPUS_ID = 'WRITE_CAMPUS_ID';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';


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

export function deleteCampus (campus) {
  console.log('actioncreatorhit')
  const action ={type: DELETE_CAMPUS, campus}
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

export function deleteStudent (student) {
  const action = {type: DELETE_STUDENT, student}
  return action;

}

export function updateStudent (student) {
  const action = {type: UPDATE_STUDENT, student}
  console.log('actioncreatorstudent', student)
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
  console.log('studentpost', student)
  return function thunk (dispatch) {
    return axios.post('/api/students/', student)
    .then(res => {
      console.log('***res.data', res.data)
      return res.data
    })
    .then(newStudent => {
      dispatch(getStudent(newStudent));
      history.push(`students/${newStudent.id}`)
    })
    .catch();
  }
}

export function postCampus (campus, history) {
  //campus is {name, image}
    console.log('this is campus', campus)
    let name = campus.name;
    return function thunk (dispatch) {
      console.log('campusthunk', campus)
      return axios.post('/api/campus/', campus)
      .then(res => {
        console.log('this is res', res.data)
        return res.data
      })
      .then(newCampus => {
        console.log('newCampus', newCampus)
        dispatch(getSingleCampus(newCampus));
        history.push('campus');
      })
      .catch();
    }
  }

export function destroyCampus (id) {
  return function thunk (dispatch) {
    return axios.delete(`/api/campus/${id}`, id)
    .then(res => {
      console.log('thisisidthunk', id)
      dispatch(deleteCampus(id))
    })
    .catch();
  }
}

export function destroyStudent (id) {
  return function thunk (dispatch) {
    return axios.delete(`/api/students/${id}`, id)
    .then(res =>{
      console.log('thisisstudentidthunk', id)
      dispatch(deleteStudent(id))
    })
    .catch();
  }
}

export function editStudent (update) {
  return function thunk (dispatch) {
    console.log('this is update', update)
    return axios.put(`/api/students/${update.id}`, update)
    .then(res => {
      console.log('thisisresdata**', res.data)
      return res.data})
    .then(updatedStudent => {
      console.log('updatedStudent***', updatedStudent)
      dispatch(updateStudent(updatedStudent));
    })
    .catch();
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
      return Object.assign({}, state, {newCampus: action.newCampus});

    case DELETE_CAMPUS:
      return Object.assign({}, state, {campusList: state.campusList.filter(deletedCampus => deletedCampus.id !== Number(action.campus))});
      
    

    //STUDENTS

    case GET_STUDENTS:
      return Object.assign({}, state, {studentsList: action.studentsList});

    case GET_STUDENT:
      return Object.assign({}, state, {studentsList: [...state.studentsList, action.student]});

    case WRITE_STUDENT:
      return Object.assign({}, state, {newStudentEntry: action.newStudentEntry});

    case WRITE_EMAIL:
      return Object.assign({}, state, {newEmailEntry: action.newEmailEntry});

    case WRITE_CAMPUS_ID:
      return Object.assign({}, state, {newCampusId: action.newCampusId} );

    case DELETE_STUDENT:
      return Object.assign({}, state, {studentsList: state.studentsList.filter(deletedStudent => deletedStudent.id !== Number(action.student))})

    case UPDATE_STUDENT:
      return Object.assign({}, state, {studentsList: state.studentsList.map(student => {
                                          if(student.id === Number(action.student.id)) return action.student
                                            else return student;  
                                      }) 
                                    })
    //add reducer case for update!

    default:
      return state;
  };

};

export default rootReducer
