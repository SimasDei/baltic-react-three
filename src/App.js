import React, {Component} from 'react';
import './App.css';
import formComponents from './Form'
import helper from './helper'


let _this = null;
class App extends Component {
    defaultState = {
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

    constructor(props) {
        super(props);
        this.state = this.defaultState
        _this = this;
    }

    goBack () {
        //this.setState(this.defaultState)
        this.setState({isEditMode: true})
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
        let content = <Form/>
        if (helper.formValid(this.state) && !this.state.isEditMode){
            content = <FormSuccess/>;
        }
        return (
            <div className="App wrapper">
                {content}
            </div>
        );
    }
}

function Form () {
    return (<div>
        {formComponents.form.bind(_this)()}
    </div>)
}

function FormSuccess () {
    return (<div>
        {formComponents.success.bind(_this)()}
    </div>)
}

function FormFailure () {
    return (<div>
        {formComponents.fail.bind(_this)()}
    </div>)
}



export default App;

