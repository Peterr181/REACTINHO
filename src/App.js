import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Navbartop from "./components/NavBar/Navbartop";
import Todo from "./components/Todo/Todo";
import Introduction from "./components/Introduction/Introduction";
import Career from "./components/Career/Career";
import Weather from "./components/Weather/Weather";
import Memer from "./components/Memer/Memer";
import { TodoContext } from "./components/Todo/TodoContext";
import Github from "./Github/Github";

function App() {
  const [todos, setTodos] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  const handleButtonClick = () => {
    setIsButtonClicked((prevState) => !prevState);
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <>
        <div className="content__wrapper">
          <Navbar
            isButtonClicked={isButtonClicked}
            setIsButtonClicked={setIsButtonClicked}
          />
          <div className="mainly__content">
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route
                path="/todo"
                element={
                  <div className="todo__wrapper">
                    <Todo />
                  </div>
                }
              />
              <Route path="/weatherapp" element={<Weather />} />
              <Route path="/memer" element={<Memer />} />
              <Route path="/career" element={<Career />} />
              <Route path="/github" element={<Github />} />
            </Routes>
          </div>
        </div>
        <Navbartop
          isButtonClicked={isButtonClicked}
          handleButtonClick={handleButtonClick}
        />
      </>
    </TodoContext.Provider>
  );
}

export default App;
