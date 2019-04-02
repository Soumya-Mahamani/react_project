import React, { Component } from 'react';
import ModalEquity from '../modals/Equity';
import ModalBond from '../modals/Bond';
import ModalCash from '../modals/Cash';

export default class Card extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			showModal1: false,
			showModal2: false,
			showModal3: false,
		}
	}
	handleClose = (e) => {
    this.setState({
			showModal1: false,
			showModal2: false,
			showModal3: false,
    })
  }
  render() {
		let { data } = this.props;
		data = data ? data[0] : [];
		let items = data.constituents;

		let equitySum = items.map((item) => { return  item.instrument.type == "Equity" ?  item.weight : ''  });
		equitySum =	equitySum.map(function(item) {
				return parseInt(item, 10);
		});
			equitySum = equitySum.filter(s => s !== '');
		let bondSum = items.map((item) => { return  item.instrument.type == "Bond" ?  item.weight : ''  });
				bondSum =	bondSum.map(function(item) {
					return parseInt(item, 10);
				});
			bondSum = bondSum.filter(s => s !== '');

		let cashSum = items.map((item) => { return  item.instrument.type == "Cash" ?  item.weight : ''  });

				cashSum =	cashSum.map(function(item) {
					return parseInt(item, 10);
				});

				cashSum = cashSum.filter(s => s !== '');
		let numOr0 = n => isNaN(n) ? 0 : n
		const sumEquity = equitySum.reduce((partial_sum, a) => {return Math.ceil(numOr0(partial_sum)) + Math.ceil(numOr0(a))} );
		const sumBond = bondSum.reduce((sum, b) => { return Math.ceil(numOr0(sum) + numOr0(b))} );
		const sumCash = cashSum.reduce((partial_sum, a) => { return Math.ceil(numOr0(partial_sum) + numOr0(a)) } );
		const sc = sumCash + 5;
		let trp = 0;
		if((sumEquity + sumBond) < 78)
		{
			trp = sumCash + 5;
		}
		else {
			trp = sumCash;
		}
    return (
		<div className="table">
			<table className="table table-striped " style={{border: "1px solid black"}}>
				<thead>
					<tr>
						<th scope="col">Category/Stock</th>
						<th scope="col"></th>
						<th scope="col">Model Weight(%)</th>
						<th scope="col">Weight(100%)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Equity</th>
						<td><button type="button" class="btn btn-primary" onClick={() => this.setState({ showModal1: true })}>Add Equity</button></td>
						<td>{sumEquity}%</td>
						<td>{sumEquity}%</td>
					</tr>
					 {
							items.map((item, key) => { return  item.instrument.type == "Equity" ?  (
								<tr key={key}>
									<td scope="row"><i class="icon ion-md-trash" style={{paddingRight: '10px', color: 'red'}} onClick={()=> this.props.handleDelete(item.instrument.id, "Equity")}></i>{item.instrument.name}</td>
									<td></td>
									<td>{item.weight}%</td>
									<td>{item.weight}%</td>
								</tr>
							) : '' } ) 
					 }
					<tr>
						<th scope="row">Bond</th>
						<td><button type="button" class="btn btn-primary" onClick={() => this.setState({ showModal2: true })} >Add Bond</button></td>
						<td>{sumBond}%</td>
						<td>{sumBond}%</td>
					</tr>
					{
							items.map((item, key) => { return  item.instrument.type == "Bond" ?  (
								<tr key={key}>
									<td scope="row"><i class="icon ion-md-trash" style={{paddingRight: '10px', color: 'red'}} onClick={()=> this.props.handleDelete(item.instrument.id, "Bond")}></i>{item.instrument.name}</td>
									<td></td>
									<td>{item.weight}%</td>
									<td>{item.weight}%</td>
								</tr>
							) : '' } ) 
					 }
					<tr>
						<th scope="row">Cash</th>
						<td><button type="button" class="btn btn-primary" onClick={() => this.setState({ showModal3: true })}>Add Cash</button></td>
						<td>{trp}%</td>
						<td>{trp}%</td>
					</tr>
					{
							items.map((item, key) => { return  item.instrument.type == "Cash" ?  (
								<tr key={key}>
									<td scope="row"><i class="icon ion-md-trash" style={{paddingRight: '10px', color: 'red'}} onClick={()=> this.props.handleDelete(item.instrument.id, "Cash")}></i>{item.instrument.name}</td>
									<td></td>
									<td>{item.weight} %</td>
									<td>{item.weight} %</td>
								</tr>
							) : '' } ) 
					 }
				</tbody>
			</table>
			<ModalEquity show={this.state.showModal1} onHide={this.handleClose} handleSubmit={this.props.handleSubmit} />
			<ModalBond show={this.state.showModal2} onHide={this.handleClose} handleSubmit={this.props.handleSubmit} />
			<ModalCash show={this.state.showModal3} onHide={this.handleClose} handleSubmit={this.props.handleSubmit} />

		</div>	
    )
  }
}
