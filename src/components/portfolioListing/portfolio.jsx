import React, { Component } from 'react'
import hongkong from '../../hongKong.png'
import List from './portfolioList.jsx'
import { connect } from 'react-redux';
import '../../changes.css'
import PortfolioActions from '../../actions/PortfolioActions'

class portfolio extends Component {
	constructor(props)
	{
		super(props);
	}
  render() {
	  let { data } = this.props;
		let initialData = data.portfolio.data;
    return (
      <div className="container-fluid"> 
				<img src={hongkong} className="center" alt="logo" style={{paddingTop: '80px'}}/>
				<List data={initialData}/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => PortfolioActions(dispatch);
const mapStateToProps = (state) => ({data: state});
export default connect(mapStateToProps, mapDispatchToProps)(portfolio);