import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postCampus, writeCampus} from '../reducers';



function NewCampus (props) {
  
  const {newCampus, name, handleChange} = props;
  const handleSubmit = props.handleSubmit;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Campus Name</label>
        <input value={newCampus} name="campusName" onChange={handleChange} type="text" className="form-control" aria-describedby="nameHelp" placeholder="Enter campus name" />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )

}

const mapStateToProps = function (state, ownProps) {
  console.log('statenewCampus', state.newCampus)
  return {
    newCampus: state.newCampus,
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return ({ 
    handleChange (e) {
      dispatch(writeCampus(e.target.value))
      console.log('***etargetvalue', e.target.value)
    },
    handleSubmit (e) {
      e.preventDefault();
      console.log('eventcampusIdval', e.target.campusName.value)
      
      let name = e.target.campusName.value;
      
      dispatch(postCampus({name}, ownProps.history))
      dispatch(writeCampus(''));
      
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus);