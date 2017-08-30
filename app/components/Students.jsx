import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';

function Students (props) {
  return (
    <div >
        <ul className="studentProfileOption">
           {props.studentsList.map(students => {
               return (
                   <li key={students.id}>
                     <NavLink to={`/students/${students.id}`} activeClassName="active">
                     <span>{students.name}</span>
                     </NavLink>
                   </li>
               )
           })}
         <li>
          <NavLink to="new-student">Add a New Student</NavLink>
         </li>
       </ul> 
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        studentsList: state.studentsList
    }
}

const StudentsListContainer = connect(mapStateToProps)(Students)

export default StudentsListContainer;