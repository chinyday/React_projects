import React, { useState } from "react";
import "./App.css";

function AppForm() {
  const [person, setPerson] = useState({ name: "", email: "" });
  const handelSubmit = (e) => {
    e.preventDefalt();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="name">이름 : </label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        value={person.name}
      ></input>
      <label htmlFor="email">이메일 : </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={person.email}
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default AppForm;
