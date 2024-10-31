import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h1>Nour Tawfik</h1>
      <h1>CS5610.20596.202510</h1>
      <h2>Please navigate to one of the following pages:</h2>
      <ul>
        <li>
          <Link to="/Labs">Labs</Link>
        </li>
        <li>
          <Link to="/Labs/Lab1">Lab 1</Link>
        </li>
        <li>
          <Link to="/Labs/Lab2">Lab 2</Link>
        </li>
        <li>
          <Link to="/Labs/Lab3">Lab 3</Link>
        </li>
        <li>
          <Link to="/Labs/Lab4">Lab 4</Link>
        </li>
        <li>
          <Link to="/Kanbas">Kanbas</Link>
        </li>
        <li>
          <Link to="https://github.com/nourtawfik04/kanbas-react-web-app">
            Repository
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

