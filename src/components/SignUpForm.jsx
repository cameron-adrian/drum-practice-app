import React, { useState } from "react";

function SignUpForm() {
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the contact information to your backend
    console.log("Submitted:", contact);
    alert(
      "This is where I will eventually put an email/phonenumber/just log-into-Twitter-and-get-a-dm backend to send you weekly patterns!"
    );
    setContact("");
  };

  return (
    <div className="sign-up-form">
      <h2>Sign up for weekly patterns:</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="contact">Email or Phone Number:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
