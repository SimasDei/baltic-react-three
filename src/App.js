import React, {Component} from 'react';
import './App.css';
import Form from './Form'
import helper from './helper'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            formErrors: {
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            }
        }
    }

    // Prevent Default Form Submit
    handleSubmit = e => {
        e.preventDefault();

        if (helper.formValid(this.state)) {
            console.log(`
        -----SUBMITTING-----
        first Name: ${this.state.firstName}
        last Name: ${this.state.lastName}
        email: ${this.state.email}
        phone: ${this.state.phone}
      `)
        } else {
            console.error('Form Invalid display error message')
        }
    };

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 && value.length > 0 ? 'Minimum 3 Characters Required' : '';
                break;

            case 'lastName':
                formErrors.lastName = value.length < 3 && value.length > 0 ? 'Minimum 3 Characters Required'
                    : '';
                break;

            case 'email':
                formErrors.email = helper.EMAIL_REGEXP.test(value) ? ''
                    : 'Need Valid Email';
                break;

            case 'phone' :
                formErrors.phone = helper.PHONE_REGEXP.test(value) && value.substring(0, 2) === '86'
                    ? '' : 'Input a valid Lithuanian number starting with 86';
                break;

            default:
                break;
        }

        this.setState({formErrors, [name]: value}, () => console.log(this.state))
    };

    render() {
        let content = Form.form.bind(this)();
        if (helper.formValid(this.state)){
            content = Form.success();
        }
        return (
            <div className="App wrapper">
                {content}
            </div>
        );
    }
}

export default App;