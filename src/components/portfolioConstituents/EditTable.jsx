import React, { Component } from 'react';

export default class Card extends Component {
	constructor(props)
	{
        super(props);
        this.state = {
						lock1: false,
						lock2: false,
						lock3: false
				}
				this.handleSubtract1 = this.handleSubtract1.bind(this);
				this.handleSubtract2 = this.handleSubtract2.bind(this);
				this.handleSubtract3 = this.handleSubtract3.bind(this);
				this.handleAdd1 = this.handleAdd1.bind(this);
				this.handleAdd2 = this.handleAdd2.bind(this);
				this.handleAdd3 = this.handleAdd3.bind(this);
				this.handleLock1 = this.handleLock1.bind(this);
				this.handleLock2 = this.handleLock2.bind(this);
				this.handleLock3 = this.handleLock3.bind(this);
	}
	handleLock1() {
		if(this.state.lock1 == false)
		{
			this.setState({ lock1: true });
		}
		else {
			this.setState({ lock1: false });
		}
	}

	handleLock2() {
		if(this.state.lock2 == false)
		{
			this.setState({ lock2: true });
		}
		else {
			this.setState({ lock2: false });
		}
	}

	handleLock3() {
		if(this.state.lock3 == false)
		{
			this.setState({ lock3: true });
		}
		else {
			this.setState({ lock3: false });
		}
	}

	handleSubtract1(id){

		if(this.state.lock1 == false)
		{
			this.props.handleSubtract(id);
		}
	}
	handleSubtract2(id){

		if(this.state.lock2 == false)
		{
			this.props.handleSubtract(id);
		}
	}
	handleSubtract3(id){

		if(this.state.lock3 == false)
		{
			this.props.handleSubtract(id);
		}
	}
	handleAdd1(id){
		if(this.state.lock1 == false)
		{
			this.props.handleAdd(id);
		}
	}
	handleAdd2(id){
		if(this.state.lock2 == false)
		{
			this.props.handleAdd(id);
		}
	}
	handleAdd3(id){
		if(this.state.lock3 == false)
		{
			this.props.handleAdd(id);
		}
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
		const sumEquity = equitySum.reduce((partial_sum, a) => numOr0(partial_sum) + numOr0(a) );
		const sumBond = bondSum.reduce((sum, b) => numOr0(sum) + numOr0(b) );
		const sumCash = cashSum.reduce((partial_sum, a) => numOr0(partial_sum) + numOr0(a) );

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
						<td><i class="fa fa-lock" aria-hidden="true" onClick={this.handleLock1}></i></td>
						<td>50%</td>
						<td>50%</td>
					</tr>
					 {
							items.map((item, key) => { return  item.instrument.type == "Equity" ?  (
								<tr key={item.instrument.id}>
									<td scope="row"><i class="icon ion-md-trash" style={{paddingRight: '10px', color: 'red'}} onClick={()=> this.props.handleDelete(item.instrument.id, "Equity")}></i>{item.instrument.name}</td>
									<td></td>
									<td>{item.weight}%</td>
									<td>
										<div className="row">
											<div className="col-1"><i class="fa fa-plus" aria-hidden="true" onClick={() =>{this.handleAdd1(item.instrument.id)}} ></i></div>
											<div className="col-2"><input type="text" class="form-control" style={{width: '75px', height: '25px'}} value={item.weight} /></div>
											<div className="col-8" style={{paddingLeft: '35px'}}><i class="fa fa-minus" aria-hidden="true" onClick={() =>{this.handleSubtract1(item.instrument.id)}}></i></div>
										</div>
									</td>
								</tr>
							) : '' } )  
					 }
					<tr>
						<th scope="row">Bond</th>
						<td><i class="fa fa-lock" aria-hidden="true" onClick={this.handleLock2}></i></td>
						<td>30%</td>
						<td>30%</td>
					</tr>
					{
							items.map((item, key) => { return  item.instrument.type == "Bond" ?  (
								<tr key={key}>
									<td scope="row"><i class="icon ion-md-trash" style={{paddingRight: '10px', color: 'red'}} onClick={()=> this.props.handleDelete(item.instrument.id, "Bond")}></i>{item.instrument.name}</td>
									<td></td>
									<td>{item.weight}%</td>
									<td>
										<div className="row">
											<div className="col-1"><i class="fa fa-plus" aria-hidden="true"  onClick={() =>{this.handleAdd2(item.instrument.id)}}></i></div>
											<div className="col-2"><input type="text" class="form-control" style={{width: '50px', height: '25px'}} value={item.weight} /></div>
											<div className="col-8"style={{paddingLeft: '35px'}} onClick={() =>{this.handleSubtract2(item.instrument.id)}}  ><i class="fa fa-minus" aria-hidden="true"></i></div>
										</div>
									</td>
								</tr>
							) : '' } ) 
					 }
					<tr>
						<th scope="row">Cash</th>
						<td><i class="fa fa-lock" aria-hidden="true" onClick={this.handleLock3}></i></td>
						<td>20%</td>
						<td>20%</td>
					</tr>
					{
							items.map((item, key) => { return  item.instrument.type == "Cash" ?  (
								<tr key={key}>
									<td scope="row"><i class="icon ion-md-trash" style={{paddingRight: '10px', color: 'red'}} onClick={()=> this.props.handleDelete(item.instrument.id, "Cash")}></i>{item.instrument.name}</td>
									<td></td>
									<td>{item.weight}%</td>
									<td>
										<div className="row">
											<div className="col-1"><i class="fa fa-plus" aria-hidden="true" onClick={() =>{this.handleAdd3(item.instrument.id)}}  ></i></div>
											<div className="col-2"><input type="text" class="form-control" style={{width: '50px', height: '25px'}} value={item.weight} /></div>
											<div className="col-8"style={{paddingLeft: '35px'}} onClick={() =>{this.handleSubtract3(item.instrument.id)}}><i class="fa fa-minus" aria-hidden="true"></i></div>
										</div>
									</td>
								</tr>
							) : '' } ) 
					 }
				</tbody>
			</table>
		</div>	
    )
  }
}

