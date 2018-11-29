import React, {Component} from 'react';
import App from './App';

class Tabs extends Component {

    render() {

        return (
                <div className="tabs">
                    <div className={(this.props.active === 'form' ? 'tab tab1 active' : 'tab tab1 closed')} onClick={this.props.form}>
                        <span>Form</span>
                    </div>
                    <div className={(this.props.active === 'about' ? 'tab tab2 active' : 'tab tab2 closed')} onClick={this.props.about}>
                        <span>About</span>
                    </div>
                  <div className={(this.props.active === 'config' ? 'tab tab3 active' : 'tab tab3 closed')} onClick={this.props.config}>
                    <span>Config</span>
                  </div>
                </div>)
    }

}

export default Tabs