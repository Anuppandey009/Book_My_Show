import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Login() {
  const initVal = {
    username: "",
    password: ""
  };
  // const history = useHistory();
  //let history = useHistory ();
  const [data, setdata] = useState(initVal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      "http://json-server-mocker-masai.herokuapp.com/users"
    );
    res.data.map(
      (el) => el.username === data.username && el.password === data.password
      // && history.push("/dashboard")
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Enter User Name"
        />

        <input
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="Enter Password"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
