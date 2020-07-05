import React, { useState } from "react";
import style from "./App.module.css";

function Input({ info }) {
  const [value, setValue] = useState("");
  return (
    <>
      <small className={style.small}>
        debug: State is <u>{info.toString()}</u>
      </small>
      <input
        className={style.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Type something"
      />
    </>
  );
}

function SameInput({ info }) {
  const [value, setValue] = useState("");
  return (
    <>
      <small className={style.small}>
        debug: State is <u>{info.toString()}</u>
      </small>
      <input
        className={style.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Type something"
      />
    </>
  );
}

function App() {
  const [value, setValue] = useState(false);

  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        <strong>Differente instance</strong>
        <br />
        {value ? <Input info={value} /> : <SameInput info={value} />}
      </label>

      <label className={style.label}>
        <strong>Same instance</strong>
        <br />
        {value ? <Input info={value} /> : <Input info={value} />}
      </label>

      <button className={style.button} onClick={() => setValue(!value)}>
        Toggle value
      </button>
    </div>
  );
}

export default App;
