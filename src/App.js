import Login from "./Pages/login/signup";
import axios from "axios";
export default function () {
  const handleClick = async () => {
    await axios
      .get("http://localhost:5000/")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <Login />
    </div>
  );
}
