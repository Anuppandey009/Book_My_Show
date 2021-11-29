import axios from "axios";
import { useState } from "react";

export function Signup() {
  const initVal = {
    user_name: "",
    password: "",
    age: "",
    location: ""
  };
  const [data, setdata] = useState(initVal);
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setdata({
      ...data,
      [name]: type === "checkbox" ? value : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://json-server-mocker-masai.herokuapp.com/users", data);
    setdata(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          onChange={handleChange}
          placeholder="Enter Name"
        />

        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter password"
        />

        <input
          type="number"
          name="age"
          onChange={handleChange}
          placeholder="Enter age"
        />

        <input
          type="text"
          name="location"
          onChange={handleChange}
          placeholder="Enter Location"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
