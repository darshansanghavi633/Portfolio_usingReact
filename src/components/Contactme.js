import React from "react";
import Button from "react-bootstrap/Button";
import {FaUserAlt,FaPhone,FaCommentDots} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {TfiCommentsSmiley} from 'react-icons/tfi'
import {GiNetworkBars} from 'react-icons/gi'

export default function Contactme() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState(false);
  const [feedback, setFeedback] = React.useState(false);

  const handleFeedback = async () => {
    if (!name || !message) {
      setError(true);
      return false;
    }

    let result = await fetch("http://127.0.0.1:5000/feedback", {
      method: "post",
      body: JSON.stringify({ name, email, company, phone, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    setFeedback(true);

    if (result) {
      setCompany("");
      setEmail("");
      setName("");
      setMessage("");
      setPhone("");
    }
  };
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="conatiner design">
        <div className="container  text-center">
          <p style={{ marginBottom: "0px" }}>Get in touch</p>
          <h1 style={{ color: "yellowgreen" }}> CONTACT</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            <FaUserAlt/> Name*
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {error && !name && <span className="valid-input">Enter Your Name</span>}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            <MdEmail/> Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Enter valid email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            <GiNetworkBars/> Company
          </label>
          <input
            type="text"
            className="form-control"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Enter your company name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
           <FaPhone/> Phone No.
          </label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Contact number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
           <FaCommentDots/> Message*
          </label>
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please share your feedback with us."
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        {error && !message && (
          <span className="valid-input">Enter Feedback</span>
        )}
        <div className="container text-center">
          <Button
            onClick={handleFeedback}
            type="submit"
            variant="outline-info"
            className="iconbutton"
          >
            <h4> Submit <TfiCommentsSmiley/> </h4>
          </Button>
          {feedback && (
            <div className="valid-input">Thanks for the feedback!</div>
          )}
        </div>
      </div>
    </div>
  );
}
