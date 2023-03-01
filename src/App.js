import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Navbartop from "./components/NavBar/Navbartop";
import Todo from "./components/Todo/Todo";
import Introduction from "./components/Introduction/Introduction";
import Career from "./components/Career/Career";
import Weather from "./components/Weather/Weather";
import Memer from "./components/Memer/Memer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TodoContext } from "./components/Todo/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked((prevState) => !prevState);
  };
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <Router>
        <div className="content__wrapper">
          <Navbar
            isButtonClicked={isButtonClicked}
            setIsButtonClicked={setIsButtonClicked}
          />
          <div className="mainly__content">
            <Switch>
              <Route exact path="/">
                <Introduction />
              </Route>
              <Route path="/todo">
                <div className="todo__wrapper">
                  <Todo />
                </div>
              </Route>
              <Route path="/weatherapp">
                <Weather />
              </Route>
              <Route path="/memer">
                <Memer />
              </Route>
              <Route path="/career">
                <Career />
              </Route>
            </Switch>
          </div>
        </div>
        <Navbartop
          isButtonClicked={isButtonClicked}
          handleButtonClick={handleButtonClick}
        />
      </Router>
    </TodoContext.Provider>
  );
}

export default App;
