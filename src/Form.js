import React, { useContext } from "react";
import { StoreContext } from "./App";
import "./App.css";
const Form = () => {
  const store = useContext(StoreContext);
  const [bug, setbug] = React.useState("");
  return (
    <div>
      <br></br>
      <form
        className="form-group mt-2 mr-2"
        onSubmit={e => {
          store.addBug(bug);
          setbug("");
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Enter text"
          className="inputext mr-2 "
          size="35"
          value={bug}
          required
          onChange={e => {
            setbug(e.target.value);
          }}
        ></input>
        <div>
          <button type="submit" className="btn btn-dark mt-3">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
