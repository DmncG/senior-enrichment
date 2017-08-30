import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postStudent, writeStudent} from '../reducers';



function NewStudent (props) {

  
  const {newStudentEntry, name, campusList, newEmailEntry, handleChange, handleSumbit} = props;
  return (
    <form>
      <div className="form-group">
      <label>Name</label>
      <input value={newStudentEntry} name="studentName" onChange={handleChange} type="text" className="form-control" aria-describedby="nameHelp" placeholder="Enter name" />
    </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" name="studentEmail" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
      <select className="custom-select">
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
  console.log('statestudentry', state.newStudentEntry)
  return {
    newStudentEntry: state.newStudentEntry,
    campusList: state.campusList,
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange (e) {
      if(e.target.name = 'studentName') console.log('this is studentName', e.target.name)
        else console.log('this is student email', e.target.name)
      
      dispatch(writeStudent(e.target.value));
    },
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);










//just react

// export default class NewStudent extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       newStudentEntry: '',
//       newEmailEntry: ''
//     };
//     this.handleChangeName = this.handleChangeName.bind(this);
//     this.handleChangeEmail = this.handleChangeEmail.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChangeName (e) {
//     this.setState({newStudentEntry: e.target.value})
//   }

//   handleChangeEmail (e) {
//     this.setState({newEmailEntry: e.target.value})
//   }

//   handleSubmit (e) {
//     e.preventDefault();

//     const addStudentName = this.props.postStudent()
//     const addStudentEmail
//   }

//   render () {


//     return (
//       <form>
//       <div className="form-group">
//       <label>Name</label>
//       <input value={this.state.newStudentEntry} onChange={this.handleChangeName} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter name" />
//     </div>
//       <div className="form-group">
//         <label>Email address</label>
//         <input value={this.state.newEmailEntry} onChange={this.handleChangeEmail} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
//       </div>
//       <div className="form-group">
//       <select className="custom-select">
//         <option defaultValue>Choose a Campus</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </select>
//       </div>
//       <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//     )

//   }
// }