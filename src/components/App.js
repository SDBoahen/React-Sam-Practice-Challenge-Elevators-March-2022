import React from "react";

import Header from "./Header";

import StudentsList from "./StudentsList";

import SearchBar from "./SearchBar";
import Student from "./Student";
import FirstFloor from "./Floors/FirstFloor";

function App() {
  return (
    <div>
      <Header />

      <SearchBar />

      <h1>Lobby</h1>

      <StudentsList />

      <br/><br/><br/><br/>

      <FirstFloor />

    </div>
  );
}

export default App;
