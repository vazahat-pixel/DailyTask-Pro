import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
  return (
    <div>
      <h2>Signup</h2>
      {/* Simple signup form */}
      <form>
        <input type="text" placeholder="Name" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <input type="password" placeholder="Confirm Password" /><br />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default SingUp;
