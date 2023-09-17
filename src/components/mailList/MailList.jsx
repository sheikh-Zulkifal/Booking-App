import React from './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time, save money!</h1>
        <sapn className="mailDesc">Sign up and we'll send the best deals to you</sapn>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your email address'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList