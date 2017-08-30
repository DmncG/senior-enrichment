import React, { Component } from 'react';

export default class NewStudent extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <form>
        <div className="form-group">
          <label for="campusentry">Name</label>
          <input type="name" className="form-control" placeholder="Enter campus name" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}