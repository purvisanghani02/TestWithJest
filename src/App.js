import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setdata] = useState("");

  const changehandler = () => {
    setdata("heloooooo");
  };
  return (
    <div className="App">
      <p>helo</p>
      <button data-testid="btn1" onClick={changehandler}>
        update
      </button>
      <h1>{data}</h1>
      <br />
      <label htmlFor="example">Example</label>
      <input id="example" type="text" defaultValue="hello" />
      <br />
      {/* multiple input type -------------------- */}
      <button>click 1</button>
      <button>click 2</button>
      <br />
      <label htmlFor="user">user name</label>
      <input type="text" id="user" />
      <div role="dummy">dummy data</div>

      <br />

      {/* getall by role---------------------------- */}
      <button>click me</button>
      <button>click me</button>
      <button>click me</button>
      <button>click me</button>
      <button>click me</button>
      <button>click me</button>
      <button>click me</button>
      <button>click me</button>
      <button>click me</button>
      <br />
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <br />
      {/* checkbox---------- */}
      <label htmlFor="skills">skill</label>
      <input type="checkbox" id="skills" defaultChecked />
      <br />
      {/* getAllBylable--------------  */}
      <label htmlFor="users1">User name list</label>
      <input id="users1" type="text" defaultValue={"dipali"} />
      <label htmlFor="users2">User name list</label>
      <input id="users2" type="text" defaultValue={"dipali"} />
      <label htmlFor="users3">User name list</label>
      <input id="users3" type="text" defaultValue={"dipali"} />
      <br />

      {/* placeholder------------------ */}
      <input type="text" placeholder="enter your name" />
      <input type="text" placeholder="enter your name" />
      <input type="text" placeholder="enter your name" />

      {/* getByText-------------------- */}
      <button>button</button>
      <h1>hello react</h1>

      <p className="paraStyle" id="p1 ">
        p tag testing
      </p>

      {/* getByTestId------------------- */}
      {/* <button data-testid="testid">click me</button> */}
      {/* <h1 data-testid="testid">hello react</h1> */}
      <h1 element-id="testid">hello react</h1>
    </div>
  );
}

export default App;
