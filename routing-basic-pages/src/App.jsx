import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <h3>Links:</h3>
      <ul>
        <li>
          <h1>
            <Link to="classes">Classes</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link to="curriculum">Curriculum</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link to="exams">Exams</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link to="groups">Groups</Link>
          </h1>
        </li>
      </ul>
    </div>
  );
}

export default App;
