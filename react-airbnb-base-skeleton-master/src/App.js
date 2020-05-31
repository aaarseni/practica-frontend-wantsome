import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import List from './components/List/List';

function App() {
  return (
    <div>
      <Header />
      <Tabs />
      <List />
      <footer>footer</footer>
    </div>
  );
}

export default App;
