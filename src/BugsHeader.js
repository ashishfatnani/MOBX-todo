import React from "react";
import { StoreContext } from "./App";
import { useObserver } from "mobx-react";
import "./App.css";
const BugsHeader = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => {
    return (
      <div className="header">
        <div> Number of Bugs is {store.bugsCount}</div>
      </div>
    );
  });
};

export default BugsHeader;
