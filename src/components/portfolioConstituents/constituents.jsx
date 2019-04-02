import React, { Component } from 'react'
import '../../changes.css';
import Table from './ShowTable';

class constituents extends Component {
    constructor(props)
    {
      super(props);
    }
  render() {
    let { data } = this.props;

    return (
      <div className="container">
        <div className="row" >
          <div className="col-9" >
            <h2>Portfolio Constituents</h2>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-info" onClick={this.props.handleReset}>Reset</button>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-info" onClick={this.props.handleEdit}>Edit</button>
          </div>
        </div>
        <Table data={data} handleSubmit={this.props.handleSubmit} handleDelete={this.props.handleDelete}/> 
      </div>
    )
  }
}
export default constituents