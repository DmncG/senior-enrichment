import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Campus from './Campus';
import Students from './Students';
import NewStudent from './NewStudent';
import NewCampus from './NewCampus';
import Welcome from './Welcome';
import CampusList from './CampusList';
import StudentProfile from './StudentProfile';
import DeleteCampus from './DeleteCampus';
import DeleteStudent from './DeleteStudent';
import UpdatedStudent from './UpdatedStudent';
import store from '../store';
import {fetchCampus, fetchStudents} from '../reducers';


  export default class HomePage extends Component {
    constructor () {
      super()
    }

    componentDidMount () {
      const campusThunk = fetchCampus();
      const studentsThunk = fetchStudents();
      store.dispatch(campusThunk);
      store.dispatch(studentsThunk);
    }

    render () {

      return (
        <div>
          <NavBar />
          <main>
            <Switch>
              
              <Route path="/home" component={Welcome} />
              <Route path="/new-student" component={NewStudent} />
              <Route path="/new-campus" component={NewCampus} />
              <Route path="/campus/:id/delete" component={DeleteCampus} />
              <Route path="/student/:studentId/delete" component={DeleteStudent} />
              <Route exact path="/campus" component={Campus} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/students/:id/:id" component={CampusList} />
              <Route path="/students/:studentId" component={StudentProfile} />
              <Route path="/stud/:id/update" component={UpdatedStudent} />
              <Redirect to="/home" component={Welcome} />
              
            </Switch>
          </main>
        </div>
      )
    }
  };