import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeInputHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className="form register__form">
          <p className="form__error-message">Fill in all fields.</p>
          <input
            type="text"
            placeholder="Full name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Register
          </button>
        </form>
        <small>
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
