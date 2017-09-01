import React, { Component } from 'react';
import {connect} from 'react-redux';
import {destroyStudent} from '../reducers';




function DeleteStudent (props) {
    const {destroyOnClick, studentsList, redirectOnClick} = props;
    
    console.log('studentsList', studentsList)
    console.log('propsparams', props.match.params)
    let localStudent = studentsList.find(students => students.id === Number(props.match.params.studentId)).id;
    console.log('localstud', localStudent)
    


   return (
        <div>
        <h3>Are you sure you want to expel this student?</h3>
        <img src="https://vignette3.wikia.nocookie.net/animal-jam-clans-1/images/c/c2/Mortybebb.png/revision/latest?cb=20160830030805" className="morty" />
        <button type="button" onClick={redirectOnClick}className="btn btn-outline-primary">Meh</button>
        <button type="button" onClick={destroyOnClick} value={localStudent} className="btn btn-outline-danger">Bye Felicia</button>
        </div>
   )
    // const {destroyOnClick, campusList} = props

    // //find the campus to be deleted
    // let localCampus = campusList.find(campus => campus.id === Number(props.match.params.id)).id;


    // return (
    //     <div>
    //         <h2>Are you sure you want to wipe out this planet's err... school's existence? </h2>
    //         <img src="/images/exploding_planet.png" className="destroyedImage" />
    //         <button type="button" className="btn btn-outline-primary">Not really</button>
    //         <button type="button" onClick={destroyOnClick} value={localCampus} className="btn btn-outline-danger">Goodbye world</button>
    //     </div>
    // )
};

const mapStateToProps = function (state, ownProps) {
  console.log('campusList', state.studentsList)
  return {
    studentsList: state.studentsList,
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return ({ 
      destroyOnClick (e) {
        
        // e.preventDefault();
        let name = e.target.value;
        console.log("etargval", name)
        dispatch(destroyStudent(name))
        ownProps.history.push('/students')
        
      },
      redirectOnClick (e) {
        ownProps.history.push(`/students/${ownProps.match.params.studentId}`)
      }

    })
  }



export default connect(mapStateToProps, mapDispatchToProps)(DeleteStudent);

