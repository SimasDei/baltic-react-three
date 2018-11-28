import React, {Component} from 'react';

class Tabs extends Component {
    render() {
        return (
            <div className="container">
                <div className="tabs">
                    <div className={'tab1'}>
                        <span>Form</span>
                    </div>
                    <div className={'tab2'} onClick={this.props.appState.handleAbout}>
                        <span>About</span>
                    </div>
                </div>
            </div>)
    }

}

export default Tabs