import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import UserList from "./UserList";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
