import React, { Component } from 'react';
import {connect} from 'react-redux';
import {destroyCampus} from '../reducers';




function DeleteCampus (props) {
    const {destroyOnClick, consoleOnClick, campusList} = props

    //find the campus to be deleted
    let localCampus = campusList.find(campus => campus.id === Number(props.match.params.id)).id;


    return (
        <div>
            <h2>Are you sure you want to wipe out this planet's err... school's existence? </h2>
            <img src="/images/exploding_planet.png" className="destroyedImage" />
            <button type="button" className="btn btn-outline-primary">Not really</button>
            <button type="button" onClick={destroyOnClick} value={localCampus} className="btn btn-outline-danger">Goodbye world</button>
        </div>
    )
}
//   const {newCampus, name, handleChange} = props;
//   const handleSubmit = props.handleSubmit;
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label>Campus Name</label>
//         <input value={newCampus} name="campusName" onChange={handleChange} type="text" className="form-control" aria-describedby="nameHelp" placeholder="Enter campus name" />
//       </div>

//       <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//   )

// }

const mapStateToProps = function (state, ownProps) {
  console.log('campusList', state.campusList)
  return {
    campusList: state.campusList,
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return ({ 
      destroyOnClick (e) {
        
        // e.preventDefault();
        let name = e.target.value;
        console.log("etargval", name)
        dispatch(destroyCampus(name))
        ownProps.history.push('/campus')
        
      }
    })
  }



export default connect(mapStateToProps, mapDispatchToProps)(DeleteCampus);