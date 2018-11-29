import React, {Component} from 'react';
import Tabs from "./Tabs";

export default {
  about: function About() {
    return (
      <div className={'container'}>
        <div className="form-wrapper">
          <h2>This is the About Section</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur dolor dolorem doloremque dolorum
            eveniet exercitationem itaque magnam, maxime modi natus nemo officiis pariatur ratione sapiente sit suscipit
            vel veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet beatae cum dicta eaque eius error ex
            facere fuga, harum, itaque molestiae neque nostrum perferendis quod reiciendis saepe sint vel?</p>
        </div>
      </div>
    )
  }
}