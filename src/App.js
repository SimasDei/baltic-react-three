import React, {Component} from 'react';
import './App.css';
import formComponents from './Form';
import aboutComponents from './About';
import helper from './helper';
import Config from "./Config";


let _this = null;

class App extends Component {
  defaultState = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    aboutPage: false,
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

  goBack() {
    //this.setState(this.defaultState)
    this.setState({isEditMode: true, aboutPage: false, activeTab: 'closed' })
  }

  // Prevent Default Form Submit
  handleSubmit = e => {
    e.preventDefault();
    this.setState({isPreloader: true})
    submitFormApi().then(() => {
      this.setState({
        isEditMode: false,
        isSubmit: true,
        isPreloader: false
      })
    })
  };

  handleAbout = e => {
    e.preventDefault();
    this.setState({aboutPage:true, isEditMode: true, isSubmit: false});
   this.aboutPage ? this.setState({aboutPage: false}) : this.setState({aboutPage: true});
  }

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

    this.setState({formErrors, [name]: value}, () => console.log(this.state))
  };

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
    return true
  }

  render() {
    console.log('render')
    let content = <Form />
    if (helper.formValid(this.state) && !this.state.isEditMode && this.state.isSubmit) {
      content = <FormSuccess/>
    } else if (this.state.isPreloader) {
      content = (<div className="loader">Please Wait</div>)
    } else if (this.state.aboutPage) {
      content = <About />
    }
    this.state.isEditMode = false;
    return (
      <div className="App wrapper">
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

