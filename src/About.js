import React from 'react';

export default {
  about: function About() {
    return (
      <div className={'container'}>
        <div className="tabs">
          <div className="tab1 closed" onClick={this.goBack.bind(this)}>
            <span>Form</span>
          </div>
          <div className="tab2 active">
            <span>About</span>
          </div>
        </div>

        <div className="form-wrapper">
          <h2>This is the About Section</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur dolor dolorem doloremque dolorum
            eveniet exercitationem itaque magnam, maxime modi natus nemo officiis pariatur ratione sapiente sit suscipit
            vel veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet beatae cum dicta eaque eius error ex
            facere fuga, harum, itaque molestiae neque nostrum perferendis quod reiciendis saepe sint vel?</p>
          <button onClick={this.goBack.bind(this)}>Back</button>
        </div>
      </div>
    )
  }
}