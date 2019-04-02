import React, { Component } from 'react'

 class SignInModal extends Component {
  constructor(props){
    super(props);
    this.state = {
        weight: '',
        name: '',
        type: '',
        id: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = () => {
    let data = this.state;
    this.props.handleSubmit({...data, type: "Equity"});
    this.props.onHide();
    this.setState({
        weight: '',
        name: '',
        type: '',
        id: ''
    })
  }
  
  render() {
    return (
      <div>   
          <div className={`modal fade ${this.props.show ? 'show' : ''}`} aria-hidden="true" role="dialog" tabIndex="-1" style={{ display: (this.props.show) ? 'block': 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Equity</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onHide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="weight" className="col-form-label">Weight</label>
            <input type="text" className="form-control" id="weight" placeholder="enter weight to be added" value={this.state.weight} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="name" className="col-form-label">Name</label>
            <input type="text" className="form-control" id="name" value={this.state.name}  placeholder="enter name" onChange={this.handleChange} />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" close="modal" onClick={this.handleSubmit}>Submit</button>
      </div>
         </div>
        </div>
       </div>
      </div>
    )
  }
}
export default SignInModal;