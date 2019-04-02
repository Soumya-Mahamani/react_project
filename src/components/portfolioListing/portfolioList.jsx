import React, { Component } from 'react'
import '../../changes.css'
import { NavLink } from 'react-router-dom'

export default class portfolioList extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    let { data } = this.props;
    data = data ? data[0] : [];
    return (
      <div className="center">
        <div className="card" style={{width: "44.1rem"}}>
          <ul className="list-group list-group-flush">          
            <li className="list-group-item">
              <div className="row">
                <div className="col-9">
                  Volatility 
                </div>
              <div className="col-3">
                {data.volatility}
              </div>
            </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-9">
                  1 Month Return 
                </div>
              <div className="col-3">
                <span>{data.month_return}<i class="fa fa-caret-up" style={{paddingLeft: '5px', color: '#00ff00', fontSize: '20px'}}></i></span>
              </div>
            </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-9">
                  Mean Return 
                </div>
              <div className="col-3">
                {data.mean_return}
              </div>
            </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-9">
                  Minimum Investment 
                </div>
              <div className="col-3">
                <span style={{fontSize: '12px'}}>{data.currency}</span> 170,000
              </div>
            </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-8">
                  Eligibility 
                </div>
              <div className="col-4">
                Available for all investors
              </div>
            </div>
            </li>
          </ul>
          <NavLink to='/constituents'><button type="button" className="btn btn-danger" style={{width: "705px"}}>Explore Investment Idea</button></NavLink>
        </div>
      </div>
    )
  }
}
