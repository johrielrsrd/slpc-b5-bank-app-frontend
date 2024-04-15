const postRegistration = (newUser) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: `${newUser.email}`,
      firstname: `${newUser.firstname}`,
      lastname: `${newUser.lastname}`,
      mobile: `${newUser.mobile}`,
      password: `${newUser.password}`,
      username: `${newUser.username}`
    })
  };

  fetch("http://localhost:8080/user/add", postOptions)
    .then((response) => {
      if (response.status === 409) {
        alert("User already exists.");
      } else if (response.ok) {
        alert("Registration successful.");
      } else {
        alert("Registration failed. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
};

const postLogIn = async (userLogIn) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password: `${userLogIn.password}`,
      username: `${userLogIn.username}`
    })
  };

  return await fetch("http://localhost:8080/user/login", postOptions)
    .then((response) => {
      if (response.status === 401) {
        alert("Invalid Username or Password.");
      } else if (response.ok) {
        return true;
      } else {
        alert("Registration failed. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
};

export { postRegistration, postLogIn };
