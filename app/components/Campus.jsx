import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';


function Campus (props) {
    
  return (
    <div className="bg_box repeatImage">
        <div className="container welcomeImage">
        <div className="row">
            <div className="col-4">
                <ul>
                    {
                        props.campusList.map(campus => {
                            
                        return (
                            <li key={campus.id} className="media">
                                <div className="media-left">
                                        <img className="media-object" src={campus.image} alt="image" />
                                <NavLink to={`students/${campus.id}/${campus.id}`} activeClassName="active CampusListName">
                                <span>
                                    {campus.name}
                                </span>
                                </NavLink>
                                <NavLink to={`campus/${campus.id}/delete`} >
                                <button type="button" className="btn btn-outline-danger deleteCampus">Delete</button>
                                </NavLink>
                                </div>
                            </li>
                        )
                    })}
                    <li>
                        <img className="media-object defaultPlanet" src="/images/defaultplanet.png" alt="image" />
                        <NavLink to="new-campus"><p className="addCampus">Add a New Campus</p></NavLink>
                    </li>  
                </ul> 
            </div>
            <div className="col-4">
              <h1 className="CampusListHeader">Campus List</h1>
            </div>
            <div className="col-4">
            <p></p>
            </div>
        </div>
      </div>
       
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
    return {
        campusList: state.campusList,
        studentsList: state.studentsList,
    }
}

const CampusListContainer = connect(mapStateToProps)(Campus)

export default CampusListContainer;