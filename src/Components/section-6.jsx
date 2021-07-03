import React from "react";
import { useState } from "react";
import tickIcon from '../images/TickIcon/2x/baseline_check_circle_white_24dp.png'
import dangerIcon from '../images/dangerIcon/2x/baseline_error_white_24dp.png'
import emailjs from 'emailjs-com'
import "./ComponentsStyles/Section6.css";

const Section6 = () => {

  const successMessage = (
    <div className="successMessage">
      <div className="my-auto">
        <img src={tickIcon} alt="Tick icon"></img>
      </div>
      <div className="ps-2">
        <h5 style={{textAlign: "start"}} className="my-auto">Message sent</h5>
        <small>we will get back to you!</small>
      </div>
    </div>
  )

  const dangerMessage =(
      <div className="dangerMessage">
        <div className="my-auto">
          <img src={dangerIcon} alt="Tick icon"></img>
        </div>
        <div className="ps-2">
          <h5 style={{textAlign: "start"}} className="my-auto">Error!</h5>
          <small>Don't worry. Mail us at <b>contact@sparue.com</b>. </small>
        </div>
    </div>
  )

  const [MailStatus, setMailStatus] = useState({
    sent: false,
    success: false,
    fail: false,
  })

  const NotificationTimeoutTimer = ()=>{
    setTimeout(function(){
       setMailStatus({
         success: false,
         fail: false
       })
    }, 9000);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          setMailStatus({
            success: true,
            fail: false,
          })
          NotificationTimeoutTimer();
      }, (error) => {
        setMailStatus({
          success: false,
          fail: true,
        })
        NotificationTimeoutTimer();
      });
  }

  return (
    <div className=" contact-info">
      <div className="left-section">
        <div className="left-items">
          <h2>Contact with Us</h2>

          <p>
            It's very easy to get in touch with us. Just use the contact form or
            pay us a visit for a coffee at the office. Dynamically innovate
            competitive technology after an expanded array of leadership.
          </p>

        </div>
      </div>
      <div className="right-section">
        <div className="form">
          <h5 className="form-heading">Reach Us Quickly</h5>

          <form onSubmit={sendEmail}>
            <div className="grid-content">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Name"
                name = "name"
              />
              <input
                className="form-control"
                type="email"
                placeholder="Enter Email"
                name="email"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Phone"
                name="phone"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Company"
                name="company"
              />
              <div>
                <input
                  className="form-control Message"
                  type="text"
                  placeholder="Message"
                  name="message"
                />
                <div>
                  {MailStatus.success? successMessage:null}
                  {MailStatus.fail? dangerMessage:null}
                </div>
              </div>
            </div>

            <button className="btn">Submit</button>
          </form>


        </div>
      </div>
    </div>
  );
};
export default Section6;
