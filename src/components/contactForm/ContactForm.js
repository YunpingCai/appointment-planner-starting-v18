import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  duplicate
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
      </label>
      <label>
        Phone:
          <input 
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            required
          />
          {duplicate && <span style={{color: 'red'}}>Name already exists</span>}
      </label>
      <label>
        Email:
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
      </label>
      <input type="submit" value="Add Contact" />
    </form>
  );
};

