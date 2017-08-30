import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';


function CampusList (props) {

    let filteredArr = props.studentsList.filter((student) => {
        if(student.campusId === Number(props.match.params.id)){
            return student;
        }
    })
   
  return (
    <div className="bg_box">
       <ul>
           {   

               filteredArr.map(students => {
                   
               return (
                   <li key={students.id}>

                     <NavLink to={`/students/${students.id}`} activeClassName="active">
                     <span>{students.name}</span>
                     </NavLink>
                    
                   </li>
               )
           })}
       </ul> 
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
    console.log('**mapstatepropsCampus', state)
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

const SingleCampusListContainer = connect(mapStateToProps)(CampusList)

export default SingleCampusListContainer;