import React from "react";

export default {
    form: function Form() {
        return (<div className="form-wrapper">
            <h2>Create an Account</h2>
            <form onSubmit={this.handleSubmit} noValidate>

                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
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
                        onChange={this.handleChange}
                        noValidate/>

                    {this.state.formErrors.phone.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.phone}</span>
                    )}
                </div>

                <div className="submitForm">
                    <button type="submit">Submit Form</button>
                </div>
            </form>
        </div>)
    },
    success: function Success() {
        return (<div className="form-wrapper">
            <h2>Create an Account</h2>
            <div>
                Success
            </div>
            <button>Back</button>
        </div>)
    },
    fail: function FailSubmit() {
        return (<div className="form-wrapper">
            <h2>Create an Account</h2>
            <div>
                Fail
            </div>
            <button>Back</button>
        </div>)
    }
}