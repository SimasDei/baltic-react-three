import React from "react";

export default {
  form: function Form() {
    return (

      <div className="container">
        <div className="tabs">
        <div className={'tab1'}>
          <span>Form</span>
        </div>
        <div className={'tab2'} onClick={this.handleAbout}>
          <span>About</span>
        </div>
      </div>

        <div className="form-wrapper">
          <h2>Create an Account</h2>
          <form noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                value={this.state.firstName}
                className={this.state.formErrors.firstName.length > 0 ? 'error' : 'valid'}
                placeholder="First Name"
                name="firstName"
                onChange={this.handleChange}
                noValidate/>

              {this.state.formErrors.firstName.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.firstName}</span>
              )}
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                value={this.state.lastName}
                className={this.state.formErrors.lastName.length > 0 ? 'error' : 'valid'}
                placeholder="Last Name"
                name="lastName"
                onChange={this.handleChange}
                noValidate/>

              {this.state.formErrors.lastName.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.lastName}</span>
              )}
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className={this.state.formErrors.email.length > 0 ? 'error' : 'valid'}
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                noValidate/>

              {this.state.formErrors.email.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.email}</span>
              )}
            </div>

            <div className="phone">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className={this.state.formErrors.phone.length > 0 ? 'error' : 'valid'}
                placeholder="Phone Number"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                noValidate/>

              {this.state.formErrors.phone.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.phone}</span>
              )}
            </div>

            <div className="submitForm">
              <button onClick={this.handleSubmit}>Submit Form</button>
            </div>
          </form>
        </div>
      </div>)
  },
  success: function FormSuccess() {
    return (
      <div className="container">
        <div className="tabs">
          <div className={'tab1'} onClick={this.goBack.bind(this)}>
            <span>Form</span>
          </div>
          <div className={'tab2'} onClick={this.handleAbout}>
            <span>About</span>
          </div>
        </div>

        <div className="form-wrapper">
          <h2>User Information</h2>
          <div className="userInfo">
            <p>First Name: <strong>{this.state.firstName}</strong></p>
            <p>Last Name: <strong>{this.state.lastName}</strong></p>
            <p>Email: <strong>{this.state.email}</strong></p>
            <p>Phone #: <strong>{this.state.phone}</strong></p>
          </div>

          <button onClick={this.goBack.bind(this)}>Back</button>
        </div>
      </div>


     )
  },
  fail: function FailSubmit() {
    return (<div className="form-wrapper">
      <h2>Create an Account</h2>
      <div>
        Fail
      </div>
      <button onClick={this.goBack.bind(this)}>Back</button>
    </div>)
  }
}