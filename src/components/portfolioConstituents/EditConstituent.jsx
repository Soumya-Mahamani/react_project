import React, { Component } from 'react'
import '../../changes.css';
import Table from './EditTable';

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
          <div className="col-8" >
            <h2>Portfolio Constituents</h2>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-info" onClick={this.props.handleRebalance}>Rebalance</button>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-info" onClick={this.props.handleSave}>Save&Continue</button>
          </div>
        </div>
        <Table data={data}
               handleSubmit={this.props.handleSubmit}
               handleDelete={this.props.handleDelete}
               handleAdd={this.props.handleAdd}
               handleSubtract={this.props.handleSubtract} /> 
      </div>
    )
  }      
}
export default constituents