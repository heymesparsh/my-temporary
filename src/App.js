import React from 'react';

import './App.css';

function App() {
  return (
    <div className='loginpage'>
      <div className='dine-overlay'>
        <div className='automate-takeaway'>
          <b>Automate your takeaway</b>{' '}
        </div>
        <p>
          <b>
            Pos features help your business to be fully automated with <br />{' '}
            DineOrder online ordering system.
          </b>
        </p>
        <a href='#' class='login-box' tabindex='0'>
          <b>View More</b>
        </a>
      </div>
      <div className='log-section'>
        <div className='attrib user-input-wrp'>
          <form action=''>
            <input type='text' className='inputText' required />
            <span class='floating-label'>Email Address Or Phone Number</span>
            <br />
            <input type='password' className='inputText-1' required />
            <span class='floating-label-1'>Password</span>
            <br />
            <input className='btn' type='button' value='LOG IN' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
