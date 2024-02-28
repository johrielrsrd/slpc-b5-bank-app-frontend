import { useState } from "react";
import { postRegistration } from "../apis/UserApi";

function Registration() {
  const [currentValue, setValue] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    retypepassword: ""
  });
  const [errors, setErrors] = useState({});

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

    const validationErrors = {};

    // Email validation
    if (!/\S+@\S+\.\S+/.test(currentValue.email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    // Mobile validation
    if (!/^\d{10}$/.test(currentValue.mobile)) {
      validationErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    // Password strength validation
    if (
      !/(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(
        currentValue.password
      )
    ) {
      validationErrors.password =
        "Password must be at least 8 characters long and contain at least one number, one capital letter, and one symbol";
    }

    // Password match validation
    if (currentValue.password !== currentValue.retypepassword) {
      validationErrors.retypepassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    // If there are no errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      postRegistration(currentValue);
    }
  }

  return (
    <div className="register-form-container">
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <br />
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={currentValue.firstname}
          onChange={handleChange}
          required
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={currentValue.lastname}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          value={currentValue.email}
          onChange={handleChange}
          required
        />
        <br />
        {errors.email && <p>{errors.email}</p>}

        <label>Mobile</label>
        <br />
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={currentValue.mobile}
          onChange={handleChange}
          required
        />
        <br />
        {errors.mobile && <p>{errors.mobile}</p>}

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
        {errors.password && <p>{errors.password}</p>}

        <label>Re-type Password</label>
        <br />
        <input
          type="password"
          id="retypepassword"
          name="retypepassword"
          value={currentValue.retypepassword}
          onChange={handleChange}
          required
        />
        <br />
        {errors.retypepassword && <p>{errors.retypepassword}</p>}

        <button type="submit">Submit</button>
        <p>
          Already have an account? LogIn <a href="/">here</a>
        </p>
      </form>
    </div>
  );
}

export default Registration;
