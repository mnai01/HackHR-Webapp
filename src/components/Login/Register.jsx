import React, { useState } from "react";
import loginImg from "./login.svg";

const Register = (props) => {
  const [CompanyName, setCompanyName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const companyChangeHandler = (e) => {
    console.log(e.target.value);
    setCompanyName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const registerHandler = () => {
    // axios
    //   .post(url,{
    //   Company_name:CompanyName,
    //   Email: email,
    //   Password: password
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Company name</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={companyChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={emailChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={passwordChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
