import React, { Component } from 'react'
import Constituents from './constituents'
import { connect } from 'react-redux';
import PortfolioActions from '../../actions/PortfolioActions';
import EditConstituent from './EditConstituent';
import { NavLink } from 'react-router-dom'

class MainTable extends Component {
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.handleRebalance = this.handleRebalance.bind(this);
      }
      handleSubmit(data) {
        this.props.updatePortfolio(data);
      }
      handleReset() {
        this.props.resetPortfolio();
      }
      handleDelete(id, type) {
        this.props.deletePortfolio(id, type)
      }
      handleEdit() {
        this.props.editPortfolio();
      }
      handleSave() {
        this.props.savePortfolio();
      }
      handleAdd(id) {
        this.props.addPortfolio(id);
      }
      handleSubtract(id) {
        this.props.subtractPortfolio(id);
      }
      handleRebalance() {
        this.props.rebalance();
      }

  render() {
      let tr;

      let { data } = this.props;
      let initialData = data.portfolio.data;
      if(!initialData[0].edit)
      {
          tr = ( 
            <Constituents data={initialData}
                          handleSubmit={this.handleSubmit} 
                          handleReset={this.handleReset}
                          handleDelete={this.handleDelete}
                          handleEdit={this.handleEdit}   />
          )
      }
      else 
      {
          tr = ( 
            <EditConstituent data={initialData}
														handleSubmit={this.handleSubmit} 
														handleReset={this.handleReset}
														handleDelete={this.handleDelete}
                            handleSave={this.handleSave}
                            handleAdd={this.handleAdd} 
                            handleSubtract={this.handleSubtract}
                            handleRebalance={this.handleRebalance}  />
          )
      }
    return (
      <div className="main-table">
        {tr}
        <NavLink to='/'><button type="button" className="btn btn-primary">Go Back</button></NavLink>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => PortfolioActions(dispatch);
const mapStateToProps = (state) => ({data: state});
export default connect(mapStateToProps, mapDispatchToProps)(MainTable);