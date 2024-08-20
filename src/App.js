import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cafe from "./cafe.jpg";
import User from "./User.js";

function App() {
  const [data, setdata] = useState("");
  const changehandler = () => {
    setdata("heloooooo");
  };

  const [findData, setFindData] = useState(false);
  useEffect(() => {
    setTimeout(() => setFindData(true), 1000);
  });

  const [UserEvent, setUserEvent] = useState("");
  const [Keybord, setKeybord] = useState("");

  const login = true;
  return (
    <div className="App">
      <p>hello WORLD</p>
      <p>hii dipali nikam</p>

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
      <button data-testid="testid">click me</button>
      <h1 data-testid="testid">hello react</h1>
      {/* <h1 element-id="testid">hello react</h1> */}
      {/* getByDisplayValue------------------- */}
      <input type="text" defaultValue={"harvi"} />
      <br />
      <br />
      <textarea defaultValue={"textarea"} />
      <br />
      <input type="radio" defaultValue={"male"} />
      <br />
      {/* getByTitle------------------- */}
      <button title="click me">click</button>
      <span title="chai aur code" style={{ fontSize: "60px" }}>
        &#9749;
      </span>
      <br />
      {/* getByAltText--------------- */}
      <img src={cafe} alt="coffie img" width={600} height={400} />
      <br />
      {/* --------------assertion----------- */}
      <input
        type="text"
        defaultValue={"dipali"}
        name="username"
        placeholder="dipali nikam"
        className="text-style text-width"
        id="Username"
        data-test="test"
      />
      <button className="negative" id="negative">
        Negative
      </button>

      {/*queryBy---------------------------------------------- */}
      {login ? <button>Logout</button> : <button>LogIn</button>}

      <br />
      {/*findBy---------------------------------------------- */}
      {findData ? <h1>data found</h1> : <h1>no data</h1>}

      {/* within---------------------------------------------- */}
      <div>
        parent tag
        <p>child1</p>
        <p>child2</p>
        <p>child3</p>
      </div>

      {/*user-event------------------------------------------ */}
      <h1>{UserEvent}</h1>
      <button onClick={() => setUserEvent("helllooooooo user-event")}>
        user-event
      </button>

      {/*keybord-event------------------------------------------ */}
      <h1>{Keybord}</h1>
      <input
        onChange={(e) => setKeybord(e.target.value)}
        type="text"
        placeholder="keybord-event"
      />

      <User name="user infomation" />
    </div>
  );
}

export default App;
