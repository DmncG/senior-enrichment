import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';


function StudentProfile (props) {
    let filteredArr = props.studentsList.filter((student) => {
        if(student.id === Number(props.match.params.studentId)){
            return student;
        }
    })
    
    console.log('***filteredArr', filteredArr);
  return (
    <div>
       <ul>
           {   

               filteredArr.map(student => {
                   
               return (
                   <li key={student.id}>
                     <span>Name: {student.name} Email: {student.email}
                        <button type="button" className="btn btn-outline-info">Update</button>
                        <button type="button" className="btn btn-outline-danger">Delete</button>
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