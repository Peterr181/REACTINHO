import React, { useState, useContext, useEffect } from "react";
import "./Todo.css";
import todoBackground from "../../images/todo-bg.jpg";
import { TodoContext } from "./TodoContext";

const Todo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [editedTodoIndex, setEditedTodoIndex] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoAdd = () => {
    if (newTodo !== "") {
      const newTodos = todos.concat({ text: newTodo });
      setTodos(newTodos);
      setNewTodo("");
    }
  };

  const handleTodoRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleNewTodoAdd();
    }
  };

  const handleTodoEdit = (index) => {
    setIsEditingTodo(true);
    setEditedTodoIndex(index);
    setEditedTodoText(todos[index].text);
  };

  const handleEditedTodoChange = (event) => {
    setEditedTodoText(event.target.value);
  };

  const handleEditedTodoSave = () => {
    const newTodos = [...todos];
    newTodos[editedTodoIndex].text = editedTodoText;
    setTodos(newTodos);
    setIsEditingTodo(false);
    setEditedTodoIndex(null);
    setEditedTodoText("");
  };

  const handleEditedTodoCancel = () => {
    setIsEditingTodo(false);
    setEditedTodoIndex(null);
    setEditedTodoText("");
  };

  return (
    <>
      <div className="todo__container">
        <h1 className="todo__header">TODO LIST</h1>
        <div className="todo__huge__container">
          <div className="todo__form">
            <div className="input__container">
              <input
                type="text"
                value={newTodo}
                onChange={handleNewTodoChange}
                placeholder="Add a new todo"
                className="todo__input"
                onKeyDown={handleKeyDown}
                maxLength="65"
              />
              <button className="todoadd__button" onClick={handleNewTodoAdd}>
                Add
              </button>
            </div>
          </div>
          <div className="todo__list__container">
            <ul className="todo__list">
              {todos.map((todo, index) => (
                <li key={index} className="todo__item">
                  {isEditingTodo && editedTodoIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editedTodoText}
                        onChange={handleEditedTodoChange}
                        className="todo__edit__input"
                      />
                      <div className="todo__buttons__container">
                        <button
                          className="todo__save__button"
                          onClick={handleEditedTodoSave}
                        >
                          Save
                        </button>
                        <button
                          className="todo__remove__button"
                          onClick={handleEditedTodoCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="todo__text">{todo.text}</p>
                      <div className="todo__buttons__container">
                        <button
                          className="todo__save__button"
                          onClick={() => handleTodoEdit(index)}
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          className="todo__remove__button"
                          onClick={() => handleTodoRemove(index)}
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
