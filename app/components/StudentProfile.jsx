import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';


function StudentProfile (props) {

    const {studentsList, campusList} = props;

    let filteredArr = props.studentsList.filter((student) => {
        if(student.id === Number(props.match.params.studentId)){
            return student;
        }
    })

    //get student's campus
    let studentCampus = campusList.filter(campus => campus.id === filteredArr[0].campusId)[0].name;
    
    console.log('studentCampus', studentCampus)
    console.log('***filteredArr', filteredArr);
    console.log('campuslist', campusList)

  return (
    <div>
       <ul>
           {   

               filteredArr.map(student => {
                   
               return (
                   <li key={student.id}>
                     <span>Name: {student.name} Email: {student.email} Campus: {studentCampus}
                         <NavLink to={`/stud/${student.id}/update`} activeClassName="active">
                        <button type="button" className="btn btn-outline-info">Update</button>
                        </NavLink >
                        <NavLink to={`/student/${student.id}/delete`} activeClassName="active">
                        <button type="button" className="btn btn-outline-danger">Delete</button>
                        </NavLink >
                     </span>
                     
                   </li>
                
               )
           })}
         
       </ul> 
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
    return {
        studentsList: state.studentsList,
        campusList: state.campusList,
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         campusList: function () {
//             dispatch(getCampus())
//         }
//     }
// }

const StudentProfileContainer = connect(mapStateToProps)(StudentProfile)

export default StudentProfileContainer;