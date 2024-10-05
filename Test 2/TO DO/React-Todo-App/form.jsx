import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for form inputs and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Submitted');
      // Further submit logic (like API call) can be added here
    }
  };

  // Validation logic
  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Validate username
    if (username.length < 3) {
      errors.username = 'Username must be at least 3 characters.';
      valid = false;
    } else {
      errors.username = '';
    }

    // Validate email
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address.';
      valid = false;
    } else {
      errors.email = '';
    }

    // Validate password
    if (password.length < 8 || !/\d/.test(password)) {
      errors.password = 'Password must be at least 8 characters long and contain at least one number.';
      valid = false;
    } else {
      errors.password = '';
    }

    setErrors(errors);
    return valid;
  };

  // Handle input changes and validate in real-time
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Set input value in state
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);

    // Perform validation as the user types
    validateForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
