import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",

    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (data.password.length < 5) {
      alert("Password length should be 8 characters");
    } else {
      console.log(data);
      
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label style={{ color: "blue", fontFamily: "Times" }}>E-mail</label>
          <br />
          <input type="text" name="email" onChange={changeHandler} />
          <br />
          <label>Password </label>
          <br />
          <input
            type="password"
            name="password"
            onChange={changeHandler}
          />{" "}
          <br />
          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
      </center>
    </div>
  );
};

export default Login;
