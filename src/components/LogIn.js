import { useState } from "react";
import { postLogIn } from "../apis/UserApi";

function LogIn() {
  const [currentValue, setValue] = useState({
    username: "",
    password: ""
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    postLogIn(currentValue);
  }

  return (
    <div className="register-form-container">
      <h1>Log In Page</h1>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={currentValue.username}
          onChange={handleChange}
          required
        />
        <br />

        <label>Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={currentValue.password}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
