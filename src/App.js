import React, {Component} from 'react';
import './App.css';
import formComponents from './Form';
import aboutComponents from './About';
import helper from './helper';
import Config from './Config';
import Tabs from './Tabs';

let _this = null;

class App extends Component {
  defaultState = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    active: 'form',
    aboutPage: false,
    configPage: false,
    formPage: true,
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }

  };

  constructor(props) {
    super(props);
    this.state = this.defaultState
    _this = this;
  }

  goBack = e => {
    e.preventDefault();
    this.setState(this.defaultState)
  };


  // Prevent Default Form Submit
  handleSubmit = e => {
    e.preventDefault();
    this.setState({isPreloader: true});
    submitFormApi().then(() => {
      this.setState({
        isEditMode: false,
        isSubmit: true,
        isPreloader: false
      })
    })
  };

  handleForm = e => {
    e.preventDefault();
    this.setState({aboutPage: false, isEditMode: true, isSubmit: false, formPage: true, active: 'form'})
  };

  handleAbout = e => {
    e.preventDefault();
    this.setState({aboutPage: true, isEditMode: true, isSubmit: false, formPage: false, active: 'about'});
  };

  handleConfig = e => {
    e.preventDefault();
    this.setState({
      aboutPage: false,
      isEditMode: true,
      isSubmit: false,
      configPage: true,
      formPage: false,
      active: 'config'
    });
  };

  deleteHandler = e => {
    e.preventDefault();
    this.setState(this.defaultState);
  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'firstName':
        formErrors.firstName = (value.length < 3) ? 'Minimum 3 Characters Required' : '';
        break;

      case 'lastName':
        formErrors.lastName = (value.length < 3) ? 'Minimum 3 Characters Required'
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

    this.setState({formErrors, [name]: value})
  };

  render() {
    let content = <Form/>;
    if (helper.formValid(this.state) && !this.state.isEditMode && this.state.isSubmit) {
      content = <FormSuccess/>
    } else if (this.state.isPreloader) {
      content = (<div className="loader"></div>)
    } else if (this.formPage) {
      content = <Form/>
    } else if (this.state.aboutPage) {
      content = <About/>
    } else if (this.state.configPage && !this.state.formPage) {
      content = <Config
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        phone={this.state.phone}
        delete={this.deleteHandler}
        active={this.state.active}
      />
    }
    this.state.isEditMode = false;
    return (
      <div className="App wrapper">
        <Tabs about={this.handleAbout} back={this.goBack} config={this.handleConfig} form={this.handleForm}
              active={this.state.active}/>
        {content}
      </div>
    );
  }
}

async function submitFormApi(data) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
  return console.log('testSubmit');
}

function Form() {
  return (<div>
    {formComponents.form.bind(_this)()}
  </div>)
}

function FormSuccess() {
  return (<div>
    {formComponents.success.bind(_this)()}
  </div>)
}

function FormFailure() {
  return (<div>
    {formComponents.fail.bind(_this)()}
  </div>)
}

function About() {
  return (<div>
    {aboutComponents.about.bind(_this)()}
  </div>)
}


export default App;