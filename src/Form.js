import React from "react";

export default function Form () {
    <div className="form-wrapper">
        <h2>Create an Account</h2>
        <form onSubmit={this.handleSubmit} noValidate>

            <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    className={formErrors.firstName.length > 0 ? 'error' : 'valid'}
                    placeholder="First Name"
                    name="firstName"
                    onChange={this.handleChange}
                    noValidate/>

                {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                ) }
            </div>

            <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    className={formErrors.lastName.length > 0 ? 'error' : 'valid'}
                    placeholder="Last Name"
                    name="lastName"
                    onChange={this.handleChange}
                    noValidate/>

                {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                ) }
            </div>

            <div className="email">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className={formErrors.email.length > 0 ? 'error' : 'valid'}
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                    noValidate/>

                {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                ) }
            </div>

            <div className="phone">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="text"
                    className={formErrors.phone.length > 0 ? 'error' : 'valid'}
                    placeholder="Phone Number"
                    name="phone"
                    onChange={this.handleChange}
                    noValidate/>

                {formErrors.phone.length > 0 && (
                    <span className="errorMessage">{formErrors.phone}</span>
                ) }
            </div>

            <div className="submitForm">
                <button type="submit">Submit Form</button>
            </div>
        </form>
    </div>
}