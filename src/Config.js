import React, {Component} from 'react';

class Config extends Component {

  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
          <h2>This is the Config Section</h2>
          <form noValidate className="config-form">
            <div className="config-input">
              <label htmlFor="firstName">First Name: <strong>{this.props.firstName}</strong></label>
              <input type="checkbox" name="firstName" value={this.props.firstName}/>
            </div>
            <div className="config-input">
              <label htmlFor="firstName">Last Name: <strong>{this.props.lastName}</strong></label>
              <input type="checkbox" name="firstName" value={this.props.lastName}/>
            </div>
            <div className="config-input">
              <label htmlFor="firstName">Email: <strong>{this.props.email}</strong></label>
              <input type="checkbox" name="firstName" value={this.props.email}/>
            </div>
            <div className="config-input">
              <label htmlFor="firstName">Phone: <strong>{this.props.phone}</strong></label>
              <input type="checkbox" name="firstName" value={this.props.phone}/>
            </div>

            <button onClick={this.props.delete}>Delete</button>
          </form>
        </div>
      </div>
    )
  }

}

export default Config