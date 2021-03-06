import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postStudent, writeStudent, writeEmail, writeCampusId} from '../reducers';



function NewStudent (props) {
  
  const {newStudentEntry, name, campusList, newEmailEntry, newCampusId, handleChange} = props;
  const handleSubmit = props.handleSubmit;
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input value={newStudentEntry} name="studentName" onChange={handleChange} type="text" className="form-control" aria-describedby="nameHelp" placeholder="Enter name" />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" value={newEmailEntry} onChange={handleChange} name="studentEmail" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <select onChange={handleChange} name="campusId" value={newCampusId} className="custom-select">
          <option defaultValue>Choose a Campus</option>
        {campusList.map(campus => {
          return (
            <option key={campus.id} value={campus.id}>{campus.name}</option>
          )
        })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )

}

const mapStateToProps = function (state, ownProps) {
  
  return {
    newStudentEntry: state.newStudentEntry,
    newEmailEntry: state.newEmailEntry,
    newCampusId: state.newCampusId,
    campusList: state.campusList,
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return ({ 
    handleChange (e) {
      const name = e.target.name;
      name === "studentName" ? 
      dispatch(writeStudent(e.target.value)) : name === "studentEmail" ? 
      dispatch(writeEmail(e.target.value)) : dispatch(writeCampusId(e.target.value))
    },
    handleSubmit (e) {
      e.preventDefault();
      
      let email= e.target.studentEmail.value;
      let name= e.target.studentName.value;
      let campusId = e.target.campusId.value;
      
      dispatch(postStudent({name, email, campusId}, ownProps.history))
      dispatch(writeStudent(''));
      dispatch(writeEmail(''));




    }
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);