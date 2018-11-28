import React, {Component} from 'react';

class Config extends Component {

  componentWillMount() {
    console.log('componentWillMount')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(nextProps.test && nextProps.test.length < 4){
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('render2')
    return (<div>{this.props.test}</div>)
  }

}
export default Config