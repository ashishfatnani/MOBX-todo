import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import Form from "./Form";
import BugsHeader from "./BugsHeader";
import Navbar from "./Navbar";
export const StoreContext = React.createContext();
const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["centipende"],
    addBug: bug => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return store.bugs.length;
    },
    editBug: id => {
      store.bugs[id] = prompt("Enter edit text");
    },
    deleteBug: id => {
      store.bugs.splice(id, 1);
    }
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const BugsList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <div className="card">
      <ul className="list-group">
        {store.bugs.map((bug, id) => (
          <li key={id} className="list-group-item">
            {bug}
            <div>
              <button
                type="button"
                className="btn btn-outline-primary mt-2 mr-2 ml-2"
                onClick={e => store.editBug(id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-outline-danger mt-2"
                onClick={e => store.deleteBug(id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ));
};

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Navbar></Navbar>
        <main>
          <Form></Form>
          <BugsList></BugsList>
          <BugsHeader></BugsHeader>
        </main>
      </StoreProvider>
    </div>
  );
}

export default App;
